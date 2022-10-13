import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { RowDataPacket } from 'mysql2/promise'
import { v4 as uuid } from 'uuid'

export const StatusController = (server: FastifyInstance) => ({
	async getStatus(request: FastifyRequest, reply: FastifyReply) {
		await server.mysql.query('INSERT INTO `Posts` (`id`, `author`, `title`, `content`) VALUES (?, ?, ?, ?)', [
			uuid(),
			`John`,
			`test`,
			`content`,
		])

		const results = (await server.mysql.query('SELECT * FROM Posts')) as RowDataPacket[][]

		console.log(results[0])

		reply.status(200)

		return JSON.stringify(results[0])
	},
})
