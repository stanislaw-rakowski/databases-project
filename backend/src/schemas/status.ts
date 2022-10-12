import { Type, Static } from '@sinclair/typebox'

export const StatusResponseSchema = Type.Object({
	status: Type.String(),
})

export type StatusResponse = Static<typeof StatusResponseSchema>
