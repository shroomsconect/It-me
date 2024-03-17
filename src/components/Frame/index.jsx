import PropTypes from 'prop-types'

import './index.scss'

function Frame({ children, styleUsed }) {
	return (
		<div className={`PORTFOLIO-Frame PORTFOLIO-Frame-${styleUsed}`}>
			{children}
		</div>
	)
}

Frame.propTypes = {
	children: PropTypes.any.isRequired,
	styleUsed: PropTypes.string.isRequired,
}

export default Frame
