import { FastifyInstance } from 'fastify'
import { ShelterController } from '../controllers/shelter'
import {
	ShelterCreationRequestSchema,
	ShelterCreationResponseSchema,
	GetSheltersResponseSchema,
	ParamsSchema,
} from '../schemas/shelter'

export const autoPrefix = '/shelters'

export default async function Shelter(server: FastifyInstance) {
	const controller = ShelterController(server)

	server.addHook('preHandler', server.verifyBearerAuth)

	server.route({
		url: '/',
		method: 'GET',
		schema: {
			response: {
				200: GetSheltersResponseSchema,
			},
		},
		handler: controller.getShelters,
	})

	server.route({
		url: '/',
		method: 'POST',
		schema: {
			body: ShelterCreationRequestSchema,
			response: {
				201: ShelterCreationResponseSchema,
			},
		},
		handler: controller.createShelter,
	})

	server.route({
		url: '/:id',
		method: 'DELETE',
		schema: {
			params: ParamsSchema,
		},
		handler: controller.deleteShelterById,
	})
}
