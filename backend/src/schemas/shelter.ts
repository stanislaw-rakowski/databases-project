import { Type, Static } from '@sinclair/typebox'

export const ShelterCreationRequestSchema = Type.Object({
	organizationId: Type.String(),
	name: Type.String(),
})

export type ShelterCreationInfo = Static<typeof ShelterCreationRequestSchema>

export const ShelterCreationResponseSchema = Type.Object({
	shelterId: Type.String(),
	name: Type.String(),
})

export const ShelterDeletionRequestSchema = Type.Object({
	organizationId: Type.String(),
	shelterId: Type.String(),
})

export type ShelterDeletionInfo = Static<typeof ShelterDeletionRequestSchema>
