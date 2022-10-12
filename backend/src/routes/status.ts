import { FastifyInstance } from 'fastify'
import { StatusController } from '../controllers/status'
import { StatusResponseSchema } from '../schemas/status'

export default async function Status(server: FastifyInstance) {
	const controller = StatusController(server)

	server.route({
		url: '/status',
		method: 'GET',
		schema: {
			response: {
				200: StatusResponseSchema,
			},
		},
		handler: controller.getStatus,
	})
}
