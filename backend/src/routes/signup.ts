import { FastifyInstance } from 'fastify'
import { SignupController } from '../controllers/signup'
import { OrganizationSchema, OrganizationSignupRequestSchema } from '../schemas/organization'

export default async function Signup(server: FastifyInstance) {
	const controller = SignupController(server)

	server.route({
		url: '/signup',
		method: 'POST',
		schema: {
			body: OrganizationSignupRequestSchema,
			response: {
				201: OrganizationSchema,
			},
		},
		handler: controller.createOrganization,
	})
}
