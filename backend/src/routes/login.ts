import { FastifyInstance } from 'fastify'
import { LoginController } from '../controllers/login'
import { OrganizationRequestSchema, LoginResponseSchema } from '../schemas/organization'

export default async function Organization(server: FastifyInstance) {
	const controller = LoginController(server)

	server.route({
		url: '/login',
		method: 'POST',
		schema: {
			body: OrganizationRequestSchema,
			response: {
				200: LoginResponseSchema,
			},
		},
		handler: controller.loginIntoOrganization,
	})
}
