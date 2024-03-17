import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import Frame from '../../components/Frame'
import ButtonToHome from '../../components/ButtonToHome'
import ImageWavy from '../../components/ImageWavy'
import FrameText from '../../components/FrameText'
import { ProjectContainer, Project } from '../../components/Project'

import backgroundTop from '../../assets/background-Personal.webp'

import './index.scss'

function Personal() {
	const projectList = useSelector((state) => state.dataReducer?.projects)

	const today = new Date()
	const month = today.getMonth() + 1
	const year = today.getFullYear()

	const devYear = month >= 3 ? year - 2017 : year - 2017 - 1

	return (
		<main className="PORTFOLIO-Personal">
			<Frame styleUsed="Personal">
				<ButtonToHome styleUsed="Personal" />
				<div className="PORTFOLIO-Personal-content">
					<Helmet>
						<meta
							name="description"
							content="Développeur Web Full-Stack PHP/React - Coucou moi c'est Stéphane 👋, développer c'est ma passion, j'aime donner vie à mes créations web !"
						/>
					</Helmet>

					<ImageWavy
						image={backgroundTop}
						color1="rgba(79, 85, 59, 0.2)"
						color2="rgba(245, 255, 255, 0.2)"
						color3="rgb(245, 255, 255)"
						color4="rgb(245, 255, 255)"
					/>

					<h1>
						Stéphane Pachot - mon portfolio de développeur
						Full-Stack
					</h1>

					<FrameText
						styleUsed="Personal"
						title="À propos de moi et mon être"
						right
					>
						<p>
							Hey, coucou 👋
							<br />
							<br />
							Je développe depuis maintenant {devYear} ans, et le
							plus intéressant, le plus magnifique, c'est que tel
							un forgeron je peux donner vie à ma création, je
							peux la rendre à mon image et lui donner le pouvoir
							d'exister.
							<br />
							<br />
							Si je continue encore à développer c'est tout
							simplement parce que j'en apprends tous les jours et
							que cela me fascine de plus en plus.
							<br />
							<br />
							☁️ Mon rêve actuel est de fabriquer un jeu 2D à
							partir d'une série télévisé que j'adore.
						</p>
					</FrameText>

					<FrameText
						styleUsed="Personal"
						title="Mes compétences dans le développement"
					>
						<span className="PORTFOLIO-Personal-content-textNode">
							Liste non exhaustive :
						</span>
						<ul className="PORTFOLIO-Personal-content-listLanguage">
							<li>
								<span className="code code-php">
									PHP8/Flight
								</span>
								&nbsp;
								<span className="code code-react">
									React.js/Redux.js
								</span>
								&nbsp;
								<span className="code code-mysql">
									MySQL/MariaDB
								</span>
							</li>
							<li>
								<span className="code code-js">JavaScript</span>
								&nbsp;
								<span className="code code-html">HTML5</span>
								&nbsp;
								<span className="code code-css">CSS3</span>
							</li>
							<li>Git / API / AJAX / CRUD / Shell (Bash, SH)</li>
							<li>
								SEO / Accessibilité / Jest / GIMP / Photoshop /
								Visual Studio Code
							</li>
							<li></li>
							<li>C / C++ / Python (À titre personnel)</li>
							<li>Linux (principale) / Windows 10</li>
							<li>
								Serveur Linux (Ubuntu, Debian), installation
								maison
							</li>
							<li>
								Adobe Première Pro (Création et montage vidéo)
							</li>
							<li>
								Blender 3D et Flash Forge (Modélisation et
								impression 3D)
							</li>
						</ul>
						<span className="PORTFOLIO-Personal-content-textNode">
							Formation suivi :
						</span>
						<ul className="PORTFOLIO-Personal-content-listCareer">
							<li>
								<h3>Intégrateur web - OpenClassrooms</h3>
								<p>
									Date : juin 2023 à mars 2024 (9 mois, 600
									heures)
									<br />
									<br />
									Cette formation m'a permis d'apprendre
									React.js et Redux.js.
									<br />
									Elle m'a également permis une remise à
									niveau en HTML, CSS et JavaScript.
								</p>
							</li>
							<li>
								<h3>
									Développeur d'application web et mobile -
									Dévelo'Pont (Simplon)
								</h3>
								<p>
									Date : mai 2017 à décembre 2017 (6 mois + 1
									mois de stage)
									<br />
									<br />
									Cette formation m'a permis d'apprendre PHP,
									JavaScript, HTML, CSS et SQL.
									<br />
									Elle m'a également permis d'apprendre à,
									utiliser Linux, Git et installer un serveur.
								</p>
							</li>
						</ul>
						<span className="PORTFOLIO-Personal-content-textNode">
							Parcours Professionel :
						</span>
						<ul className="PORTFOLIO-Personal-content-listCareer">
							<li>
								<h3>
									Développeur Webmaster - Auto-Entrepreneur
								</h3>
								<p>
									Date : depuis février 2020
									<br />
									<br />
									Je m'occupe d'un serveur hébergeant des
									clients qui utilise mon logiciel Vitrishop.
									<br />
									Je fais les mises à jour et je fais
									également le service technique.
								</p>
							</li>
							<li>
								<h3>
									CDI en Développeur Webmaster - Axiome-DMC
								</h3>
								<p>
									Date : juin 2018 à la fermeture en février
									2021 (32 mois)
									<br />
									<br />
									Je m'occupais du serveur hébergeant les
									clients qui utilisaient le logiciel
									Vitrishop appartenant à l'entreprise.
									<br />
									Je m'occupais aussi de faire les mises à
									jour et le service technique.
									<br />À la fermeture de l'entreprise, j'ai
									racheté le logiciel Vitrishop.
								</p>
							</li>
						</ul>
					</FrameText>

					<ProjectContainer
						styleUsed="Personal"
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
										styleUsed="Personal"
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
						styleUsed="Personal"
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
										styleUsed="Personal"
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
						styleUsed="Personal"
						title="Mes projets Dévelo'Pont !"
					>
						{projectList &&
							projectList
								.filter((project) => {
									return project.category === 'DeveloPont'
								})
								.map((project) => (
									<Project
										key={project.id}
										styleUsed="Personal"
										title={project.title}
										miniature={project.miniatureUrl}
										linkSite={project.siteUrl}
										linkProject={project.gitUrl}
										languagesProject={project.languages}
										descriptionProject={project.description}
									/>
								))}
					</ProjectContainer>
				</div>
			</Frame>
		</main>
	)
}

export default Personal
