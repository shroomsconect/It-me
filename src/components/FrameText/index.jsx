import PropTypes from 'prop-types'

import './index.scss'

function FrameText({ title, children, right, styleUsed }) {
	const classToRight = right ? ' PORTFOLIO-FrameText-right' : ''

	return (
		<section
			className={`PORTFOLIO-FrameText${classToRight} PORTFOLIO-FrameText-${styleUsed}`}
		>
			<h2>{title}</h2>
			{children}
		</section>
	)
}

FrameText.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	right: PropTypes.bool.isRequired,
	styleUsed: PropTypes.string.isRequired,
}

FrameText.defaultProps = {
	right: false,
}

export default FrameText
