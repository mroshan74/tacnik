import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/config/configureStore'
import App from './App'

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

const jsx = (
  <Provider store={store} >
    <App />
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))
