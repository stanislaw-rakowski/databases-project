import { Type, Static } from '@sinclair/typebox'

export const StatusResponseSchema = Type.Any()

export type StatusResponse = Static<typeof StatusResponseSchema>
