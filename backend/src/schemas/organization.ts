import { Type, Static } from '@sinclair/typebox'

export const OrganizationSchema = Type.Object({
	id: Type.String(),
	email: Type.String(),
	password: Type.String(),
})

export type Organization = Static<typeof OrganizationSchema>

export const OrganizationSignupRequestSchema = Type.Omit(OrganizationSchema, ['id'])
