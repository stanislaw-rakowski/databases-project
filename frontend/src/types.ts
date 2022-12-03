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

export type ShelterData = Omit<Shelter, 'shelterId'>

export type AnimalData = {
	name: string
	birthDate: string
	sex: 'male' | 'female'
	species: 'dog' | 'cat' | 'other'
	description: string
}

export type Animal = AnimalData & {
	id: string
	adopted: 0 | 1
	adoptionDate: string
	shelter: string
	employee: string
}

export type AnimalForm = {
	[K in keyof AnimalData]: K extends 'sex' | 'species' ? AnimalData[K] | '' : AnimalData[K]
}

export type Employee = {
	id: string
	name: string
	shelter: string
	organization: string
}

export type EmployeeData = Pick<Employee, 'name'>
