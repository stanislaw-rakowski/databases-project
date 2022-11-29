import { Type, Static } from '@sinclair/typebox'

export const ShelterSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
	name: Type.String(),
	owner: Type.String({ format: 'uuid' }),
})

export type Shelter = Static<typeof ShelterSchema>

export const ParamsSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
})

export type Params = Static<typeof ParamsSchema>

export const ShelterRequestSchema = Type.Object({
	name: Type.String(),
})

export type ShelterRequestBody = Static<typeof ShelterRequestSchema>

export const ShelterResponseSchema = Type.Object({
	shelterId: Type.String(),
	name: Type.String(),
})

export const SheltersResponseSchema = Type.Array(ShelterResponseSchema)
