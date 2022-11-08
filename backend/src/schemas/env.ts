import { Static, Type } from '@sinclair/typebox'

export const EnvSchema = Type.Required(
	Type.Object({
		DATABASE_URL: Type.String(),
	}),
)

export type Env = Static<typeof EnvSchema>
