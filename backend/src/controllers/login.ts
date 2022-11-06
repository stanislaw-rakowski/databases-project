import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { Organization } from '../schemas/organization'

export const LoginController = (server: FastifyInstance) => ({
	async loginIntoOrganization(request: FastifyRequest<{ Body: Organization }>, reply: FastifyReply) {
		try {
			const { email, password } = request.body

			const [organizations] = (await server.mysql.query('SELECT * FROM `Organizations` WHERE `email` = ?', [
				email,
			])) as [Organization[], any]

			if (organizations.length === 0) {
				reply.status(404)

				return {
					message: `Organization with email ${email} not found`,
				}
			}

			const [organization] = organizations

			if (!(await compare(password, organization.password))) {
				reply.status(403)

				return {
					message: 'Incorrect password',
				}
			}

			const token = sign(
				{
					organizationId: organization.id,
					email: organization.email,
				},
				'RANDOM-TOKEN',
				{ expiresIn: '24h' },
			)

			reply.setCookie('token', token)

			reply.status(200)

			return {
				organizationId: organization.id,
				email: organization.email,
				token,
			}
		} catch (error) {
			reply.status(500)

			return {
				message: 'Organization login failed',
				error,
			}
		}
	},
})
