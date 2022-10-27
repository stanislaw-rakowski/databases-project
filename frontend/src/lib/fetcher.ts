import { getAuth, removeAuth } from './auth'

export const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
	const token = getAuth()?.token

	const response = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
			...(token && { Authorization: `Bearer ${token}` }),
			...(options?.body && { 'Content-Type': 'application/json' }),
		},
	})

	let data = {}
	if (response.headers.get('content-type')?.includes('application/json')) {
		data = await response.json()
	}

	if (response.ok) {
		return data as T
	}

	if (response.status === 401) {
		removeAuth()
		window.location.reload()
	}

	throw new Error('Unable to fetch')
}
