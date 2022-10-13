import { Static, Type } from '@sinclair/typebox'

export const EnvSchema = Type.Required(
	Type.Object({
		REDIS_URL: Type.String(),
		DATABASE_URL: Type.String(),
	}),
)

export type Env = Static<typeof EnvSchema>
