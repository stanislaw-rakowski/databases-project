import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { hash } from 'bcrypt'
import { Organization } from '../schemas/organization'

export const SignupController = (server: FastifyInstance) => ({
	async createOrganization(request: FastifyRequest<{ Body: Organization }>, reply: FastifyReply) {
		try {
			const { email, password } = request.body

			const hashedPassword = await hash(password, 10)

			const organizationId = uuid()

			await server.mysql.query('INSERT INTO `Organizations` (`id`, `email`, `password`) VALUES (?, ?, ?)', [
				organizationId,
				email,
				hashedPassword,
			])

			reply.status(201)

			return {
				id: organizationId,
				password: hashedPassword,
				email,
			}
		} catch (error) {
			reply.status(500)

			return {
				message: 'Organization registration failed',
				error,
			}
		}
	},
})
