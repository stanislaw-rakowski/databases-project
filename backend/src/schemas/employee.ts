import { Type, Static } from '@sinclair/typebox'

export const EmployeeSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
	name: Type.String(),
	shelter: Type.String({ format: 'uuid' }),
	organization: Type.String({ format: 'uuid' }),
})

export type Employee = Static<typeof EmployeeSchema>

export const ShelterParamsSchema = Type.Object({
	shelterId: Type.String({ format: 'uuid' }),
})

export type ShelterParams = Static<typeof ShelterParamsSchema>

export const ParamsSchema = Type.Object({
	id: Type.String({ format: 'uuid' }),
})

export type Params = Static<typeof ParamsSchema>

export const EmployeeRequestSchema = Type.Omit(EmployeeSchema, ['id', 'shelter', 'organization'])

export type EmployeeRequestBody = Static<typeof EmployeeRequestSchema>

export const EmployeesSchema = Type.Array(EmployeeSchema)
