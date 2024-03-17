import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

function ButtonToHome({ styleUsed }) {
	return (
		<Link
			to="/"
			className={`PORTFOLIO-ButtonToHome PORTFOLIO-ButtonToHome-${styleUsed}`}
		>
			<FontAwesomeIcon
				icon={faHouseChimney}
				className="PORTFOLIO-ButtonToHome-icon"
			/>
		</Link>
	)
}

ButtonToHome.propTypes = {
	styleUsed: PropTypes.string.isRequired,
}

export default ButtonToHome
