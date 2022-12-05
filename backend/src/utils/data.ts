import { v4 as uuid } from 'uuid'

export const shelters = [
	{
		id: uuid(),
		name: 'Scranton',
		published: 0,
	},
	{
		id: uuid(),
		name: 'New york',
		published: 1,
	},
	{
		id: uuid(),
		name: 'Nashua',
		published: 0,
	},
	{
		id: uuid(),
		name: 'Stamford',
		published: 1,
	},
]

export const employees = [
	{
		id: uuid(),
		name: 'Micheal Scott',
		shelter: shelters[0].id,
	},
	{
		id: uuid(),
		name: 'Dwight Shrute',
		shelter: shelters[0].id,
	},
	{
		id: uuid(),
		name: 'Jim Halpert',
		shelter: shelters[1].id,
	},
	{
		id: uuid(),
		name: 'Pam Beesley',
		shelter: shelters[1].id,
	},
	{
		id: uuid(),
		name: 'Stanley Hudson',
		shelter: shelters[1].id,
	},
	{
		id: uuid(),
		name: 'Ryan Howard',
		shelter: shelters[2].id,
	},
	{
		id: uuid(),
		name: 'Robert California',
		shelter: shelters[3].id,
	},
	{
		id: uuid(),
		name: 'Kelly Kapoor',
		shelter: shelters[3].id,
	},
	{
		id: uuid(),
		name: 'Meredith Palmer',
		shelter: shelters[3].id,
	},
]

export const animals = [
	{
		id: uuid(),
		name: 'Reksio',
		birthDate: '2012-04-16',
		gender: 'male',
		species: 'dog',
		description: 'Wspaniały i miły piesek z Bielska-Białej',
		shelter: shelters[0].id,
		employee: employees[0].id,
	},
	{
		id: uuid(),
		name: 'Rex',
		birthDate: '2016-07-10',
		gender: 'male',
		species: 'dog',
		description: 'Dzielny i waleczny pies z wielkim sercem',
		shelter: shelters[0].id,
		employee: employees[0].id,
	},
	{
		id: uuid(),
		name: 'Crentist',
		birthDate: '2020-11-16',
		gender: 'male',
		species: 'other',
		description: 'Wielki i niebezpieczny jaszczur',
		shelter: shelters[0].id,
		employee: employees[1].id,
	},
	{
		id: uuid(),
		name: 'Fafik',
		birthDate: '2002-02-08',
		gender: 'male',
		species: 'dog',
		description: 'Stary pies - nie widzi i nie słyszy',
		shelter: shelters[1].id,
		employee: employees[2].id,
	},
	{
		id: uuid(),
		name: 'Filemon',
		birthDate: '2013-04-19',
		gender: 'male',
		species: 'cat',
		description: 'Potęzny kot',
		shelter: shelters[1].id,
		employee: employees[2].id,
	},
	{
		id: uuid(),
		name: 'Paweł',
		birthDate: '2012-03-09',
		gender: 'male',
		species: 'other',
		description: 'Rzadki okaz pająka',
		shelter: shelters[1].id,
		employee: employees[2].id,
	},
	{
		id: uuid(),
		name: 'Azor',
		birthDate: '1998-11-12',
		gender: 'male',
		species: 'dog',
		description: 'Wesoły i miły piesek',
		shelter: shelters[1].id,
		employee: employees[3].id,
	},
	{
		id: uuid(),
		name: 'Daisy',
		birthDate: '2021-04-19',
		gender: 'female',
		species: 'cat',
		description: 'Mały młody kotek',
		shelter: shelters[1].id,
		employee: employees[4].id,
	},
	{
		id: uuid(),
		name: 'Ren',
		birthDate: '2013-06-19',
		gender: 'female',
		species: 'cat',
		description: 'Lubi ludzi',
		shelter: shelters[1].id,
		employee: employees[4].id,
	},
	{
		id: uuid(),
		name: 'Barney',
		birthDate: '2003-06-19',
		gender: 'female',
		species: 'dog',
		description: 'Nie lubi mizerii',
		shelter: shelters[2].id,
		employee: employees[5].id,
	},
	{
		id: uuid(),
		name: 'Pluto',
		birthDate: '2015-04-13',
		gender: 'male',
		species: 'dog',
		description: 'Przyjacielski labrador',
		shelter: shelters[2].id,
		employee: employees[5].id,
	},
	{
		id: uuid(),
		name: 'Astro',
		birthDate: '2015-04-13',
		gender: 'male',
		species: 'dog',
		description: 'Przyjacielski owczarek niemiecki',
		shelter: shelters[3].id,
		employee: employees[6].id,
	},
	{
		id: uuid(),
		name: 'Goofy',
		birthDate: '1960-07-07',
		gender: 'male',
		species: 'cat',
		description: 'Nie znosi ludzi i wszystkiego co sie rusza',
		shelter: shelters[3].id,
		employee: employees[7].id,
	},
	{
		id: uuid(),
		name: 'Scooby Doo',
		birthDate: '2022-04-01',
		gender: 'female',
		species: 'other',
		description: 'Papuga',
		shelter: shelters[3].id,
		employee: employees[8].id,
	},
]
