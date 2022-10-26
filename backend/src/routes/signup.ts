import { FastifyInstance } from 'fastify'
import { SignupController } from '../controllers/signup'
import { OrganizationSchema, OrganizationRequestSchema } from '../schemas/organization'

export default async function Organization(server: FastifyInstance) {
	const controller = SignupController(server)

	server.route({
		url: '/signup',
		method: 'POST',
		schema: {
			body: OrganizationRequestSchema,
			response: {
				201: OrganizationSchema,
			},
		},
		handler: controller.createOrganization,
	})
}
