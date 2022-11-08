import { FastifyInstance } from 'fastify'
import { SeedController } from '../controllers/seed'

export default async function Seed(server: FastifyInstance) {
	const controller = SeedController(server)

	server.addHook('preHandler', server.verifyBearerAuth)

	server.route({
		url: '/seed',
		method: 'GET',
		handler: controller.seedDatabase,
	})
}
