import { TbGenderMale, TbGenderFemale } from 'react-icons/tb'
import { Animal } from '../../types'

type Props = {
	gender: Animal['gender']
}

const Gender = ({ gender }: Props) => {
	switch (gender) {
		case 'male':
			return <TbGenderMale />
		case 'female':
			return <TbGenderFemale />
	}
}

export default Gender
