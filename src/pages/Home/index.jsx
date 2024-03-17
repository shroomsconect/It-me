import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Button from '../../components/Button'

import './index.scss'

function Home() {
	return (
		<div className="PORTFOLIO-Home">
			<Helmet>
				<meta
					name="description"
					content="Développeur Web Full-Stack PHP/React - Coucou moi c'est Stéphane 👋, développer c'est ma passion, j'aime donner vie à mes créations web !"
				/>
			</Helmet>
			<div className="PORTFOLIO-Home-background"></div>
			<div className="PORTFOLIO-Home-decorativeTitle">PORTFOLIO</div>
			<h1>Stéphane Pachot - Développeur Web</h1>
			<h2>PHP/React.js (full-stack)</h2>
			<div className="PORTFOLIO-Home-menu">
				<p className="PORTFOLIO-Home-menu-text">
					Choisissez qui vous-êtes...
				</p>
				<div className="PORTFOLIO-Home-menu-button-container">
					<Button className="PORTFOLIO-Home-menu-button">
						<Link to="/recruteur">Recruteur</Link>
					</Button>
					{false && (
						<Button className="PORTFOLIO-Home-menu-button">
							<Link to="/developpeur">Développeur</Link>
						</Button>
					)}
					{false && (
						<Button className="PORTFOLIO-Home-menu-button">
							<Link to="/joueur">Joueur</Link>
						</Button>
					)}
					<Button className="PORTFOLIO-Home-menu-button">
						<Link to="/personnel">Personnel</Link>
					</Button>
					<Button className="PORTFOLIO-Home-menu-button">
						<Link to="/mentions-legales">Mentions Légales</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Home
