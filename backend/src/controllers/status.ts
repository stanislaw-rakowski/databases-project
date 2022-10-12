import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export const StatusController = (server: FastifyInstance) => ({
	async getStatus(request: FastifyRequest, reply: FastifyReply) {
		reply.status(200)

		return {
			status: 'ok',
		}
	},
})
