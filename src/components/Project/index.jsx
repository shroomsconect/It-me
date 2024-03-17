import { useEffect } from 'react'

import reactStringReplace from 'react-string-replace'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

import './index.scss'

export function ProjectContainer({ title, children, styleUsed }) {
	const manageHeight = () => {
		const projectContainerList = document.querySelectorAll(
			'.PORTFOLIO-ProjectContainer',
		)

		projectContainerList.forEach((projectContainer) => {
			const title = projectContainer.querySelector(
				'.PORTFOLIO-ProjectContainer-title',
			)

			const titleStyle =
				title.currentStyle || window.getComputedStyle(title)

			const marginTitle =
				parseFloat(titleStyle.marginTop) +
				parseFloat(titleStyle.marginBottom)

			const heightMin = title.scrollHeight + marginTitle

			const heightMax =
				projectContainer.querySelector(
					'.PORTFOLIO-ProjectContainer-projectListe',
				).scrollHeight + heightMin

			if (projectContainer.classList.contains('opened')) {
				projectContainer.style.height = heightMax + 'px'
			} else {
				projectContainer.style.height = heightMin + 'px'
			}
		})
	}

	const toggleProjectContainer = function (event) {
		let projectContainer = event.target
		let loopIndex = 0
		const loopLimit = 50

		while (
			!projectContainer.classList.contains(
				'PORTFOLIO-ProjectContainer',
			) &&
			loopLimit > loopIndex
		) {
			projectContainer = projectContainer.parentElement
			loopIndex++
		}

		if (projectContainer.classList.contains('opened')) {
			projectContainer.classList.remove('opened')
		} else {
			projectContainer.classList.add('opened')
		}

		manageHeight()
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(manageHeight, [])
	window.onresize = manageHeight

	return (
		<section
			className={`PORTFOLIO-ProjectContainer PORTFOLIO-ProjectContainer-${styleUsed}`}
		>
			<h2
				className="PORTFOLIO-ProjectContainer-title"
				onClick={toggleProjectContainer}
			>
				<FontAwesomeIcon
					icon={faChevronRight}
					className="PORTFOLIO-ProjectContainer-title-chevron"
				/>
				<span>(clique-moi)</span>
				{title}
			</h2>
			<div className="PORTFOLIO-ProjectContainer-projectListe">
				{children}
			</div>
		</section>
	)
}

export function Project({
	title,
	miniature,
	linkSite,
	linkProject,
	languagesProject,
	descriptionProject,
	styleUsed,
}) {
	languagesProject = languagesProject
		? languagesProject.map((language, i) => {
				switch (language) {
					case 'html':
						return (
							<span
								key={language}
								className={`code code-${language}`}
							>
								HTML5
							</span>
						)
					case 'css':
						return (
							<span
								key={language}
								className={`code code-${language}`}
							>
								CSS3
							</span>
						)
					case 'scss':
						return (
							<span key={language} className={`code code-css`}>
								(S)CSS3
							</span>
						)
					case 'js':
						return (
							<span
								key={language}
								className={`code code-${language}`}
							>
								JavaScript
							</span>
						)
					case 'php8':
						return (
							<span key={language} className="code code-php">
								PHP8
							</span>
						)
					case 'php7':
						return (
							<span key={language} className="code code-php">
								PHP7
							</span>
						)
					case 'php8/flight':
						return (
							<span key={language} className="code code-php">
								PHP8/Flight
							</span>
						)
					case 'php7/flight':
						return (
							<span key={language} className="code code-php">
								PHP7/Flight
							</span>
						)
					case 'react':
						return (
							<span
								key={language}
								className={`code code-${language}`}
							>
								React.js
							</span>
						)
					case 'react/redux':
						return (
							<span key={language} className="code code-react">
								React.js/Redux.js
							</span>
						)
					case 'mysql':
						return (
							<span
								key={language}
								className={`code code-${language}`}
							>
								MySQL
							</span>
						)
					default:
						return <span key={language}>[{language}]</span>
				}
			})
		: null

	const toFlip = (event) => {
		const flipInner = event.target.parentElement.parentElement

		flipInner.classList.toggle('flipped')
	}

	return (
		<div className={`PORTFOLIO-Project PORTFOLIO-Project-${styleUsed}`}>
			<div className="PORTFOLIO-Project-flip-inner">
				<div className="PORTFOLIO-Project-flip-inner-front">
					<div className="PORTFOLIO-Project-container">
						<h3>
							{reactStringReplace(
								title,
								'e-commerce',
								(match, i) => (
									<span key={match + i} className="no-break">
										{match}
									</span>
								),
							)}
						</h3>
						{linkSite && (
							<a
								className="PORTFOLIO-Project-link"
								href={linkSite}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
								&nbsp;Voir la version web
							</a>
						)}
						{linkProject && (
							<a
								className="PORTFOLIO-Project-link"
								href={linkProject}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
								&nbsp;Voir le Git du projet
							</a>
						)}
						{languagesProject && (
							<div className="PORTFOLIO-Project-languageList">
								<span className="PORTFOLIO-Project-languageList-title">
									Technique travaillée :
								</span>
								<div className="PORTFOLIO-Project-languageList-container">
									{languagesProject &&
										languagesProject.map((node) => node)}
								</div>
							</div>
						)}
					</div>
					<img
						className="PORTFOLIO-Project-miniature"
						src={miniature}
						alt={`Miniature du projet ${title}`}
					/>
					<button
						className="PORTFOLIO-Project-flip-inner-button"
						onClick={toFlip}
					>
						En savoir plus !
					</button>
				</div>
				<div className="PORTFOLIO-Project-flip-inner-back">
					<p>{descriptionProject}</p>
					<button
						className="PORTFOLIO-Project-flip-inner-button"
						onClick={toFlip}
					>
						Retournez-moi !
					</button>
				</div>
			</div>
		</div>
	)
}

ProjectContainer.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any,
	styleUsed: PropTypes.string.isRequired,
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	miniature: PropTypes.string.isRequired,
	linkSite: PropTypes.string,
	linkProject: PropTypes.string,
	languagesProject: PropTypes.arrayOf(PropTypes.string),
	descriptionProject: PropTypes.string.isRequired,
	styleUsed: PropTypes.string.isRequired,
}
