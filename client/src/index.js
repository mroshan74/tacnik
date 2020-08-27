import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/styles.css'

import configureStore from './store/config/configureStore'
import App from './App'
import { startGetBookings } from './store/actions/bookingActions'

const store = configureStore()

if(localStorage.getItem('authToken')){
  store.dispatch(startGetBookings())
}

store.subscribe(() => {
  console.log(store.getState())
})

const jsx = (
  <Provider store={store} >
    <App />
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
