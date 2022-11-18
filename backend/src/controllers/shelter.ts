import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { ShelterInfo } from '../schemas/shelter'

export const ShelterController = (server: FastifyInstance) => ({
	async createShelter(request: FastifyRequest<{ Body: ShelterInfo }>, reply: FastifyReply) {
		try {
			const { organizationId, name } = request.body

			const shelterId = uuid()

			await server.mysql.query('INSERT INTO `Shelters` (`id`, `name`, `owner`) VALUES (?, ?, ?)', [
				shelterId,
				name,
				organizationId,
			])

			reply.status(201)

			return { shelterId, name }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Shelter creation failed',
				error,
			}
		}
	},
})
