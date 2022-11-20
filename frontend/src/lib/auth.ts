import Cookies from 'universal-cookie'
import { AuthData } from '../types'

const KEY = 'auth'
const EXPIRATION = 1000 * 60 * 60 * 24

const cookies = new Cookies()

export const setAuth = (data: AuthData) =>
	cookies.set(KEY, data, {
		path: '/',
		expires: new Date(Date.now() + EXPIRATION),
	})

export const getAuth = () => {
	const data = cookies.get(KEY)

	if (data) {
		return data as AuthData
	}
}

export const removeAuth = () => cookies.remove(KEY)
