import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

function Button({ children, className, isDisabled }) {
	const heartList = []
	for (let i = 0; i < 17; i++) {
		heartList.push(
			<FontAwesomeIcon
				key={`heart${i}`}
				icon={faHeart}
				className="PORTFOLIO-Button-heart"
			/>,
		)
	}

	const classMerge = className ? ' ' + className : ''

	return (
		<button
			className={`PORTFOLIO-Button${classMerge}`}
			disabled={isDisabled}
		>
			{heartList.map((heart) => heart)}
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	isDisabled: PropTypes.bool.isRequired,
}

Button.defaultProps = {
	isDisabled: false,
}

export default Button
