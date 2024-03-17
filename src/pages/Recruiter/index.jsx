import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'

import { getHash, sendMail } from '../../actions/data.action'

import Frame from '../../components/Frame'
import ButtonToHome from '../../components/ButtonToHome'
import ImageWavy from '../../components/ImageWavy'
import FrameText from '../../components/FrameText'
import Button from '../../components/Button'
import { ProjectContainer, Project } from '../../components/Project'

import './index.scss'

function Recruiter() {
	const projectList = useSelector((state) => state.dataReducer?.projects)
	const contactSending =
		useSelector((state) => state.dataReducer?.contactSending) || false
	const contactMessage =
		useSelector((state) => state.dataReducer?.contactMessage) || ''
	const hash = useSelector((state) => state.dataReducer?.hash)
	const dispatch = useDispatch()

	const today = new Date()
	const month = today.getMonth() + 1
	const year = today.getFullYear()

	const devYear = month >= 3 ? year - 2017 : year - 2017 - 1

	useEffect(() => {
		if (!hash) {
			dispatch(getHash())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="PORTFOLIO-Recruiter">
			<Frame styleUsed="Recruiter">
				<ButtonToHome styleUsed="Recruiter" />
				<Helmet>
					<meta
						name="description"
						content="Développeur Web Full-Stack PHP/React - Bonjour moi c'est Stéphane 👋, je suis actuellement en recherche d'un 24h en télétravail sur 3 jours !"
					/>
				</Helmet>

				<ImageWavy
					image="in-child"
					color1="rgba(0, 0, 0, 0.1)"
					color2="rgba(255, 255, 255, 0.1)"
					color3="rgb(255, 255, 255)"
					color4="rgb(255, 255, 255)"
				>
					<div className="PORTFOLIO-Recruiter-title-container">
						<h1 className="PORTFOLIO-Recruiter-title">
							<span className="letter-up-size">S</span>téphane
							<span className="letter-up-size">P</span>achot
							<br />
							<span className="PORTFOLIO-Recruiter-title-sub">
								Développeur Web - Page pour Recruteur
							</span>
						</h1>
					</div>
				</ImageWavy>

				<FrameText styleUsed="Recruiter" title="À propos de moi" right>
					<p className="PORTFOLIO-Recruiter-about">
						Bonjour 👋
						<br />
						<br />
						Dans le développement &nbsp;
						<span className="code code-php">PHP/Apache/MySQL</span>
						&nbsp; - &nbsp;
						<span className="code code-js">JS/HTML/CSS</span>
						&nbsp; depuis {devYear} ans.
						<br />
						J'ai récemment fait une formation <b>OpenClassrooms</b>
						&nbsp; Intégrateur Web,&nbsp;
						<span className="code code-react">
							React.js et Redux.js
						</span>
						.
						<br />
						<br />
						Mes compétences principales supplémentaires (non
						exhaustives) :
						<br />- Librairie PHP Flight / API CRUD / Session
						utilisateur / Gestion cookie / Manipulation fichier
						<br />- Git / Fetch / Shell (Bash, SH) / SEO /
						Accessibilité / Jest / GIMP / VS Code
						<br />- Linux (principale) / Windows 10
						<br />- Configuration : CPU i7-4790 / GPU GTX 1060 6G /
						1 To SSD / DDR3 16 Go 1600 MHz / 3 écrans ASUS (2x 24",
						1x 34")
					</p>
					<div className="PORTFOLIO-Recruiter-buttonCV-container">
						<Button className="PORTFOLIO-Recruiter-buttonCV">
							<Link
								to="https://portfolio.pachot-web.fr/src/Pachot_Stéphane-Curriculum_Vitae.pdf"
								target="_blank"
							>
								Télécharger mon Curriculum Vitae
							</Link>
						</Button>
					</div>
				</FrameText>

				<FrameText styleUsed="Recruiter" title="Me contacter">
					<form
						className="PORTFOLIO-Recruiter-contact"
						onSubmit={(event) => {
							event.preventDefault()
							dispatch(
								sendMail(event.target, () => {
									dispatch(getHash())
								}),
							)
						}}
					>
						<label htmlFor="subject">Sujet</label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
						/>

						<label htmlFor="email">E-mail (Facultatif)</label>
						<input type="email" name="email" id="email" />

						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							maxLength="1000"
							cols="50"
							rows="5"
							required
						></textarea>

						{hash && (
							<div>
								<img
									src={`https://portfolio.pachot-web.fr/api/v1/calcul_check.png/${hash}/ffffff/004079`}
									width="150"
									height="75"
									alt="Calcul de sécurité"
								/>
								<label htmlFor="check_calcul">
									Résultat du calcul&nbsp;
								</label>
								<input
									type="text"
									name="check_calcul"
									id="check_calcul"
									required
								/>
								<input
									type="hidden"
									name="hash_calcul"
									value={hash}
								/>
							</div>
						)}

						<p>{contactMessage}</p>

						<div className="PORTFOLIO-Recruiter-contact-button-container">
							<Button
								className="PORTFOLIO-Recruiter-contact-button"
								isDisabled={contactSending}
							>
								<span>Me Contacter</span>
							</Button>
						</div>
					</form>
				</FrameText>

				<ProjectContainer
					styleUsed="Recruiter"
					title="Mes projets dans le monde du web !"
				>
					{projectList &&
						projectList
							.filter((project) => {
								return project.category === 'Self'
							})
							.map((project) => (
								<Project
									key={project.id}
									styleUsed="Recruiter"
									title={project.title}
									miniature={project.miniatureUrl}
									linkSite={project.siteUrl}
									linkProject={project.gitUrl}
									languagesProject={project.languages}
									descriptionProject={project.description}
								/>
							))}
				</ProjectContainer>

				<ProjectContainer
					styleUsed="Recruiter"
					title="Mes projets OpenClassrooms !"
				>
					{projectList &&
						projectList
							.filter((project) => {
								return project.category === 'OpenClassrooms'
							})
							.map((project) => (
								<Project
									key={project.id}
									styleUsed="Recruiter"
									title={project.title}
									miniature={project.miniatureUrl}
									linkSite={project.siteUrl}
									linkProject={project.gitUrl}
									languagesProject={project.languages}
									descriptionProject={project.description}
								/>
							))}
				</ProjectContainer>

				<ProjectContainer
					styleUsed="Recruiter"
					title="Mes projets formation Dévelo'Pont !"
				>
					{projectList &&
						projectList
							.filter((project) => {
								return project.category === 'DeveloPont'
							})
							.map((project) => (
								<Project
									key={project.id}
									styleUsed="Recruiter"
									title={project.title}
									miniature={project.miniatureUrl}
									linkSite={project.siteUrl}
									linkProject={project.gitUrl}
									languagesProject={project.languages}
									descriptionProject={project.description}
								/>
							))}
				</ProjectContainer>
			</Frame>
		</div>
	)
}

export default Recruiter
