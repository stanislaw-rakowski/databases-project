import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import { createPool } from 'mysql2/promise'

async function MySql(server: FastifyInstance) {
	const connection = createPool({
		host: 'localhost',
		user: 'user',
		password: 'foobar',
		database: 'db',
	})

	server.addHook('onClose', async () => {
		await connection.end()
	})

	server.decorate('mysql', connection)
}

export default fp(MySql)
