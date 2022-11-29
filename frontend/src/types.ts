export type AuthData = {
	organizationId: string
	email: string
	token: string
}

export type AuthRequest = {
	email: string
	password: string
}

export type Shelter = {
	shelterId: string
	name: string
	published: 0 | 1
}

export type ShelterRequest = Omit<Shelter, 'shelterId'>
