import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { createPool } from 'mysql2/promise'

const db = createPool({
	localAddress: 'mysql://user:foobar@mysql:3306/db',
})

export const StatusController = (server: FastifyInstance) => ({
	async getStatus(request: FastifyRequest, reply: FastifyReply) {
		const results = await db.query("SELECT * FROM Posts WHERE id='123'")

		reply.status(200)

		return {
			status: results,
		}
	},
})
