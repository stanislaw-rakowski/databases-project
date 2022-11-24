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
}

export type ShelterCreateRequest = Omit<Shelter, 'shelterId'>
