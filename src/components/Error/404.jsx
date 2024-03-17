import { Link } from 'react-router-dom'

import './index.scss'

function Error404() {
	return (
		<main className="PORTFOLIO-Error404">
			<h1 className="PORTFOLIO-Error404-title">Erreur, code 404</h1>
			<p className="PORTFOLIO-Error404-description">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="PORTFOLIO-Error404-link">
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export default Error404
