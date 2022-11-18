export type AuthData = {
	organizationId: string
	email: string
	token: string
}

export type AuthRequest = {
	email: string
	password: string
}

export type OrganizationIdRequest = {
	organizationId: string
}

export type ShelterCreateRequest = {
	organizationId: string
	name: string
}

export type ShelterDeleteRequest = {
	organizationId: string
	shelterId: string
}

export type Shelter = {
	shelterId: string
	name: string
}
