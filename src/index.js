import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import router from './components/Router'

import './main.scss'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { getProjects } from './actions/data.action'

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})

store.dispatch(getProjects())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
