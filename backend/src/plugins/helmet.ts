import fp from 'fastify-plugin'
import helmet, { FastifyHelmetOptions } from '@fastify/helmet'
import { FastifyInstance } from 'fastify'

async function Helmet(server: FastifyInstance) {
	server.register<FastifyHelmetOptions>(helmet)
}

export default fp(Helmet)
