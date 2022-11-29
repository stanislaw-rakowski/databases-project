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

export type AnimalRequest = {
	name: string
	birthDate: string
	sex: 'male' | 'female'
	species: 'dog' | 'cat' | 'other'
	description: string
}

export type Animal = AnimalRequest & {
	id: string
	adopted: 0 | 1
	adoptionDate: string
	shelter: string
	organization: string
	employee: string
}
