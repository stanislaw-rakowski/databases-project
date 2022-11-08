import { Type, Static } from '@sinclair/typebox'

export const AccountSchema = Type.Object({
	organizationId: Type.String({ format: 'uuid' }),
	email: Type.String({ format: 'email' }),
	password: Type.String(),
})

export type Account = Static<typeof AccountSchema>

export const AccountRequestSchema = Type.Omit(AccountSchema, ['organizationId'])

export const LoginResponseSchema = Type.Object({
	organizationId: Type.String({ format: 'uuid' }),
	email: Type.String({ format: 'email' }),
	token: Type.String(),
})

export const DeleteAccountRequestSchema = Type.Object({
	organizationId: Type.String({ format: 'uuid' }),
})
