import { Static, Type } from '@sinclair/typebox'

export const EnvSchema = Type.Required(
	Type.Object({
		DATABASE_URL: Type.String(),
		PRIVATE_KEY: Type.String(),
	}),
)

export type Env = Static<typeof EnvSchema>
