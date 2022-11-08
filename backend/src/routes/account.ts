import { FastifyInstance } from 'fastify'
import { AccountController } from '../controllers/account'
import { AccountSchema, AccountRequestSchema, LoginResponseSchema } from '../schemas/account'

export default async function Account(server: FastifyInstance) {
	const controller = AccountController(server)

	server.route({
		url: '/signup',
		method: 'POST',
		schema: {
			body: AccountRequestSchema,
			response: {
				201: AccountSchema,
			},
		},
		handler: controller.createAccount,
	})

	server.route({
		url: '/login',
		method: 'POST',
		schema: {
			body: AccountRequestSchema,
			response: {
				200: LoginResponseSchema,
			},
		},
		handler: controller.loginIntoAccount,
	})
}
