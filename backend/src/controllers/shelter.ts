import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { ShelterCreationInfo, Params } from '../schemas/shelter'

export const ShelterController = (server: FastifyInstance) => ({
	async createShelter(request: FastifyRequest<{ Body: ShelterCreationInfo }>, reply: FastifyReply) {
		try {
			const organizationId = request.auth.organizationId
			const { name } = request.body

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
	async deleteShelterById(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
		try {
			const organizationId = request.auth.organizationId
			const shelterId = request.params.id

			await server.mysql.query('DELETE FROM `Shelters` WHERE `id` = ? AND `owner` = ?', [shelterId, organizationId])

			reply.status(200)

			return { message: 'ok' }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Shelter deletion failed',
				error,
			}
		}
	},
	async getShelters(request: FastifyRequest, reply: FastifyReply) {
		try {
			const organizationId = request.auth.organizationId

			const [results] = (await server.mysql.query('SELECT * FROM `Shelters` WHERE `owner` = ?', [organizationId])) as [
				any[],
				unknown,
			]

			reply.status(200)

			return results.map(({ id, name }) => ({ shelterId: id, name }))
		} catch (error) {
			reply.status(500)

			return {
				message: 'Failed to get account shelters',
				error,
			}
		}
	},
})
