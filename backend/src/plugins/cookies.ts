import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import cookie, { FastifyCookieOptions } from '@fastify/cookie'

async function Cookies(server: FastifyInstance) {
	server.register<FastifyCookieOptions>(cookie, {
		secret: 'RANDOM-TOKEN',
		parseOptions: {},
	})
}

export default fp(Cookies)
