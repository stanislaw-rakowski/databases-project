import { Type, Static } from '@sinclair/typebox'

export const ParamsSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
})

export type Params = Static<typeof ParamsSchema>

export const ShelterCreationRequestSchema = Type.Object({
	name: Type.String(),
})

export type ShelterCreationInfo = Static<typeof ShelterCreationRequestSchema>

export const ShelterCreationResponseSchema = Type.Object({
	shelterId: Type.String(),
	name: Type.String(),
})

export const GetSheltersResponseSchema = Type.Array(ShelterCreationResponseSchema)
