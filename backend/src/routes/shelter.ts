import { FastifyInstance } from 'fastify'
import { ShelterController } from '../controllers/shelter'
import { ShelterCreationRequestSchema, ShelterCreationResponseSchema } from '../schemas/shelter'

export default async function Shelter(server: FastifyInstance) {
	const controller = ShelterController(server)

	server.addHook('preHandler', server.verifyBearerAuth)

	server.route({
		url: '/shelter/create',
		method: 'POST',
		schema: {
			body: ShelterCreationRequestSchema,
			response: {
				201: ShelterCreationResponseSchema,
			},
		},
		handler: controller.createShelter,
	})
}
