import { fetcher } from './fetcher'
import { AuthData, AuthRequest, ShelterCreateRequest, Shelter } from '../types'

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

export const createShelter = (name: string) => {
	return callApiEndpoint<ShelterCreateRequest, Shelter>('POST', `${baseUrl}/shelters`, {
		name,
	})
}

export const deleteShelterById = (shelterId: string) => {
	return callApiEndpoint<never, { message: string }>('DELETE', `${baseUrl}/shelters/${shelterId}`)
}
