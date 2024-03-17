import { GET_PROJECTS, GET_HASH, SEND_MAIL } from '../actions/data.action'

const initialState = null

export default function dataReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PROJECTS:
			return { ...state, projects: [...action.payload] }
		case GET_HASH:
			return { ...state, hash: action.payload.hash }
		case SEND_MAIL:
			if (action.payload.status === 'In progress') {
				return { ...state, contactSending: true }
			} else if (action.payload.status === 'Finish') {
				return {
					...state,
					contactMessage: action.payload.message,
					contactSending: false,
				}
			} else {
				return { ...state }
			}
		default:
			return { ...state }
	}
}
