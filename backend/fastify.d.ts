import { Pool } from 'mysql2/promise'

declare module 'fastify' {
	interface FastifyInstance {
		mysql: Pool
		verifyBearerAuth: (request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void
	}
	interface FastifyRequest {
		token: JwtPayload
	}
}
