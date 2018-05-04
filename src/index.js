import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import './scss/main.scss'
import App from './App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PokemonReducer from './redux/reducers'

const store = createStore(PokemonReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
