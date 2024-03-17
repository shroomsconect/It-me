import axios from 'axios'

const baseUrl = 'https://portfolio.pachot-web.fr/api/v1/data'

export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_HASH = 'GET_HASH'
export const SEND_MAIL = 'SEND_MAIL'

export const getProjects = () => {
	return (dispatch) => {
		return axios
			.get(baseUrl + '/projects')
			.then((result) => {
				dispatch({
					type: GET_PROJECTS,
					payload: result.data,
				})
			})
			.catch((error) => {
				errorHandling(error, 'récupérer les projets', GET_PROJECTS)
			})
	}
}

export const getHash = () => {
	return (dispatch) => {
		return axios
			.get(baseUrl + '/hash')
			.then((result) => {
				dispatch({
					type: GET_HASH,
					payload: result.data,
				})
			})
			.catch((error) => {
				errorHandling(error, 'récupérer un hash', GET_HASH)
			})
	}
}

export const sendMail = (form, reHash) => {
	const body = {
		subject: form.elements.subject.value,
		email: form.elements.email.value,
		message: form.elements.message.value,
		check_calcul: form.elements.check_calcul.value,
		hash_calcul: form.elements.hash_calcul.value,
	}

	return (dispatch) => {
		dispatch({
			type: SEND_MAIL,
			payload: { status: 'In progress' },
		})
		return axios
			.post(baseUrl + '/contact', body, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})
			.then((result) => {
				if (result.data.type === 'success') {
					form.reset()
					reHash()
				}
				dispatch({
					type: SEND_MAIL,
					payload: { ...result.data, status: 'Finish' },
				})
			})
			.catch((error) => {
				errorHandling(error, 'enoyer mail', SEND_MAIL)
			})
	}
}

const errorHandling = (error, title, actionType) => {
	let errorTitle = ''
	let errorMessage = ''

	if (error.response) {
		switch (error.response.status) {
			case 400:
				errorTitle = 'Erreur pour ' + title
				errorMessage = error.response.data.message
				break
			case 404:
				errorTitle = 'Erreur pour ' + title
				errorMessage = "La requête n'existe pas"
				break

			case 500:
				errorTitle = 'Erreur serveur pour ' + title
				errorMessage = error.response.data.message
				break

			default:
				errorTitle = 'Erreur pour ' + title
				errorMessage = 'Unknown error'
				break
		}
	} else if (error.request) {
		errorTitle = 'Erreur serveur pour ' + title
		errorMessage = 'Le serveur ne répond pas'
	} else {
		errorTitle = 'Erreur pour ' + title
		errorMessage = error.message
	}

	throw new Error(actionType, {
		cause: { message: errorMessage, title: errorTitle },
	})
}
