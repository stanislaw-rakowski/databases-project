import { Type, Static } from '@sinclair/typebox'

export const OrganizationSchema = Type.Object({
	id: Type.String(),
	email: Type.String(),
	password: Type.String(),
})

export type Organization = Static<typeof OrganizationSchema>

export const OrganizationRequestSchema = Type.Omit(OrganizationSchema, ['id'])

export const LoginResponseSchema = Type.Object({
	organizationId: Type.String(),
	email: Type.String(),
	token: Type.String(),
})
