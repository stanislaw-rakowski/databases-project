import { fetcher } from './fetcher'
import { AuthData, AuthRequest, ShelterRequest, Shelter } from '../types'

const baseUrl = import.meta.env.VITE_SERVER_URL

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const callApiEndpoint = <D, R>(method: Method, url: string, data?: D): Promise<R> => {
	return fetcher(url, {
		method,
		...(data && {
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			mode: 'cors',
		}),
	})
}

export const requestLogin = (data: AuthRequest) => {
	return callApiEndpoint<AuthRequest, AuthData>('POST', `${baseUrl}/account/login`, data)
}

export const requestSignup = (data: AuthRequest) => {
	return callApiEndpoint<AuthRequest, AuthData>('POST', `${baseUrl}/account/signup`, data)
}

export const deleteAccount = () => {
	return callApiEndpoint<never, { message: string }>('DELETE', `${baseUrl}/account`)
}

export const getShelters = () => {
	return callApiEndpoint<never, Shelter[]>('GET', `${baseUrl}/shelters`)
}

export const getShelterById = (id: string) => {
	return callApiEndpoint<never, Shelter>('GET', `${baseUrl}/shelters/${id}`)
}

export const createShelter = (name: string) => {
	return callApiEndpoint<ShelterRequest, Shelter>('POST', `${baseUrl}/shelters`, {
		name,
		published: 0,
	})
}

export const updateShelterById = (shelter: Shelter) => {
	const { shelterId, name, published } = shelter
	return callApiEndpoint<ShelterRequest, Shelter>('PATCH', `${baseUrl}/shelters/${shelterId}`, {
		name,
		published,
	})
}

export const deleteShelters = () => {
	return callApiEndpoint<never, { message: string }>('DELETE', `${baseUrl}/shelters`)
}

export const deleteShelterById = (shelterId: string) => {
	return callApiEndpoint<never, { message: string }>('DELETE', `${baseUrl}/shelters/${shelterId}`)
}
