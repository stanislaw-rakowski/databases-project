import { FaDog, FaCat, FaQuestionCircle } from 'react-icons/fa'
import { Animal } from '../../types'

type Props = {
	species: Animal['species']
}

const Species = ({ species }: Props) => {
	switch (species) {
		case 'cat':
			return <FaCat />
		case 'dog':
			return <FaDog />
		case 'other':
			return <FaQuestionCircle />
	}
}

export default Species
