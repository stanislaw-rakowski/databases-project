import Cookies from 'universal-cookie'
import { AuthData } from '../types'

const KEY = 'auth'

const cookies = new Cookies()

export const setAuth = (data: AuthData) => cookies.set(KEY, data, { path: '/' })

export const getAuth = () => {
	const data = cookies.get(KEY)

	if (data) {
		return data as AuthData
	}
}

export const removeAuth = () => cookies.remove(KEY)
