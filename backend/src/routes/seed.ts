import { FastifyInstance } from 'fastify'
import { SeedController } from '../controllers/seed'

export default async function Organization(server: FastifyInstance) {
	const controller = SeedController(server)

	server.addHook('preHandler', server.verifyBearerAuth)

	server.route({
		url: '/seed',
		method: 'GET',
		// schema: {
		// 	body: OrganizationRequestSchema,
		// 	response: {
		// 		200: LoginResponseSchema,
		// 	},
		// },
		handler: controller.seedDatabase,
	})
}
