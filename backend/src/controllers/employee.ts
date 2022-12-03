import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { v4 as uuid } from 'uuid'
import { EmployeeRequestBody, Params, ShelterParams, Employee } from '../schemas/employee'

export const EmployeeController = (server: FastifyInstance) => ({
	async createEmployee(
		request: FastifyRequest<{ Params: ShelterParams; Body: EmployeeRequestBody }>,
		reply: FastifyReply,
	) {
		try {
			const organizationId = request.auth.organizationId
			const { shelterId } = request.params
			const { name } = request.body

			const employeeId = uuid()

			await server.mysql.query(
				`INSERT INTO Employees (id, name, shelter, organization) 
				VALUES (?, ?, ?, ?)`,
				[employeeId, name, shelterId, organizationId],
			)

			reply.status(201)

			return {
				id: employeeId,
				name,
				shelter: shelterId,
				organization: organizationId,
			}
		} catch (error) {
			reply.status(500)

			return {
				message: 'Employee creation failed',
				error,
			}
		}
	},

	async getEmployees(request: FastifyRequest<{ Params: ShelterParams }>, reply: FastifyReply) {
		try {
			const { shelterId } = request.params

			const [results] = (await server.mysql.query(
				`SELECT * 
				FROM Employees
				WHERE shelter = ?`,
				[shelterId],
			)) as [Employee[], unknown]

			reply.status(200)

			return results
		} catch (error) {
			reply.status(500)

			return {
				message: 'Failed to get shelter employees',
				error,
			}
		}
	},

	async getEmployeeById(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
		try {
			const { id } = request.params

			const [[result]] = (await server.mysql.query(
				`SELECT * 
				FROM Employees 
				WHERE id = ?`,
				[id],
			)) as [Employee[], unknown]

			reply.status(200)

			return result
		} catch (error) {
			reply.status(500)

			return {
				message: 'Failed to get employee',
				error,
			}
		}
	},

	async updateEmployeeById(
		request: FastifyRequest<{ Params: Params; Body: EmployeeRequestBody }>,
		reply: FastifyReply,
	) {
		try {
			const { id } = request.params
			const { name } = request.body

			await server.mysql.query(
				`UPDATE Employees 
				SET name = ?
				WHERE id = ?`,
				[name, id],
			)

			reply.status(200)

			return { message: 'ok' }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Failed to update employee',
				error,
			}
		}
	},

	async deleteEmployees(request: FastifyRequest<{ Params: ShelterParams }>, reply: FastifyReply) {
		try {
			const { shelterId } = request.params

			await server.mysql.query(
				`DELETE FROM Employees 
				WHERE shelter = ?`,
				[shelterId],
			)

			reply.status(200)

			return { message: 'ok' }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Employees deletion failed',
				error,
			}
		}
	},

	async deleteEmployeeById(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
		try {
			const { id } = request.params

			await server.mysql.query(
				`DELETE FROM Employees 
				WHERE id = ?`,
				[id],
			)

			reply.status(200)

			return { message: 'ok' }
		} catch (error) {
			reply.status(500)

			return {
				message: 'Employee deletion failed',
				error,
			}
		}
	},
})
