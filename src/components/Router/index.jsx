import { createBrowserRouter } from 'react-router-dom'

import Error404 from '../Error/404'

import Home from '../../pages/Home'
import Recruiter from '../../pages/Recruiter'
import Developer from '../../pages/Developer'
import Player from '../../pages/Player'
import Personal from '../../pages/Personal'

import LegalNotice from '../../pages/LegalNotice'

const setTitlePage = (title) =>
	(document.title = `${title} - Portfolio | Stéphane Pachot - Développement Web - Full-Stack PHP/React`)

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		loader: () => setTitlePage('Accueil'),
	},
	{
		path: '/recruteur',
		element: <Recruiter />,
		loader: () => setTitlePage('Vue Recruteur'),
	},
	{
		path: '/developpeur',
		element: <Developer />,
		loader: () => setTitlePage('Vue Développeur'),
	},
	{
		path: '/joueur',
		element: <Player />,
		loader: () => setTitlePage('Vue Joueur'),
	},
	{
		path: '/personnel',
		element: <Personal />,
		loader: () => setTitlePage('Vue Personnel'),
	},
	{
		path: '/mentions-legales',
		element: <LegalNotice />,
		loader: () => setTitlePage('Mentions Légales'),
	},
	{
		path: '*',
		element: <Error404 />,
		loader: () => setTitlePage('Erreur 404'),
	},
])

export default router
