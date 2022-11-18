import { Type, Static } from '@sinclair/typebox'

export const ShelterCreationRequestSchema = Type.Object({
	organizationId: Type.String(),
	name: Type.String(),
})

export type ShelterInfo = Static<typeof ShelterCreationRequestSchema>

export const ShelterCreationResponseSchema = Type.Object({
	shelterId: Type.String(),
	name: Type.String(),
})
