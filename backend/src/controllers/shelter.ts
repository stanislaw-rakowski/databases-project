import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { ShelterInfo } from '../schemas/shelter'

export const ShelterController = (server: FastifyInstance) => ({
	async createShelter(request: FastifyRequest<{ Body: ShelterInfo }>, reply: FastifyReply) {
		try {
			const { organizationId, name } = request.body

			await server.mysql.query('INSERT INTO `Shelters` (`id`, `name`, `owner`) VALUES (?, ?, ?)', [
				uuid(),
				name,
				organizationId,
			])

			const dupa = await server.mysql.query('SELECT * FROM `Shelters`')

			console.log(dupa)

			reply.status(201)

			return { organizationId, name }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Shelter creation failed',
				error,
			}
		}
	},
})
