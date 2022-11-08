import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { Account } from '../schemas/account'

export const AccountController = (server: FastifyInstance) => ({
	async createAccount(request: FastifyRequest<{ Body: Account }>, reply: FastifyReply) {
		try {
			const { email, password } = request.body

			const [accounts] = (await server.mysql.query('SELECT * FROM `Accounts` WHERE `email` = ?', [email])) as [
				Account[],
				unknown,
			]

			if (accounts.length > 0) {
				reply.status(403)

				return {
					message: `Account with email ${email} is already registered`,
				}
			}

			const hashedPassword = await hash(password, 10)

			const organizationId = uuid()

			await server.mysql.query('INSERT INTO `Accounts` (`organizationId`, `email`, `password`) VALUES (?, ?, ?)', [
				organizationId,
				email,
				hashedPassword,
			])

			reply.status(201)

			return {
				organizationId,
				password: hashedPassword,
				email,
			}
		} catch (error) {
			reply.status(500)

			return {
				message: 'Account registration failed',
				error,
			}
		}
	},
	async loginIntoAccount(request: FastifyRequest<{ Body: Account }>, reply: FastifyReply) {
		try {
			const { email, password } = request.body

			const [accounts] = (await server.mysql.query('SELECT * FROM `Accounts` WHERE `email` = ?', [email])) as [
				Account[],
				unknown,
			]

			if (accounts.length === 0) {
				reply.status(404)

				return {
					message: `Account with email ${email} not found`,
				}
			}

			const [account] = accounts

			if (!(await compare(password, account.password))) {
				reply.status(403)

				return {
					message: 'Incorrect password',
				}
			}

			const token = sign(
				{
					organizationId: account.organizationId,
					email: account.email,
				},
				'RANDOM-TOKEN',
				{ expiresIn: '24h' },
			)

			reply.setCookie('token', token)

			reply.status(200)

			return {
				organizationId: account.organizationId,
				email: account.email,
				token,
			}
		} catch (error) {
			reply.status(500)

			return {
				message: 'Account login failed',
				error,
			}
		}
	},
})
