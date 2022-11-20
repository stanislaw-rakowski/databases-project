import { fetcher } from './fetcher'
import {
	AuthData,
	AuthRequest,
	OrganizationIdRequest,
	ShelterCreateRequest,
	ShelterDeleteRequest,
	Shelter,
} from '../types'
import { getAuth } from './auth'

const baseUrl = import.meta.env.VITE_SERVER_URL

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const callApiEndpoint = <D, R>(method: Method, url: string, data?: D): Promise<R> => {
	return fetcher(url, {
		method,
		...(data && {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	})
}

export const requestLogin = (data: AuthRequest) => {
	return callApiEndpoint<AuthRequest, AuthData>('POST', `${baseUrl}/login`, data)
}

export const requestSignup = (data: AuthRequest) => {
	return callApiEndpoint<AuthRequest, AuthData>('POST', `${baseUrl}/signup`, data)
}

export const deleteAccount = () => {
	const organizationId = getAuth()!.organizationId
	return callApiEndpoint<OrganizationIdRequest, { message: string }>('DELETE', `${baseUrl}/account/delete`, {
		organizationId,
	})
}

export const seedDatabase = () => {
	return callApiEndpoint<never, { message: string }>('GET', `${baseUrl}/seed`)
}

export const getShelters = () => {
	const organizationId = getAuth()!.organizationId
	return callApiEndpoint<OrganizationIdRequest, Shelter[]>('POST', `${baseUrl}/shelter`, {
		organizationId,
	})
}

export const createShelter = (name: string) => {
	const organizationId = getAuth()!.organizationId
	return callApiEndpoint<ShelterCreateRequest, Shelter>('POST', `${baseUrl}/shelter/create`, {
		organizationId,
		name,
	})
}

export const deleteShelter = (shelterId: string) => {
	const organizationId = getAuth()!.organizationId
	return callApiEndpoint<ShelterDeleteRequest, { message: string }>('DELETE', `${baseUrl}/shelter/delete`, {
		organizationId,
		shelterId,
	})
}
