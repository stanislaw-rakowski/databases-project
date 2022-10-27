import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const SeedController = (server: FastifyInstance) => ({
	async seedDatabase(request: FastifyRequest, reply: FastifyReply) {
		reply.status(200)

		return {
			message: 'ok',
		}
	},
})
