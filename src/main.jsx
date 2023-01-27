import React from 'react'
import ReactDOM from 'react-dom/client'
// import CounterApp from './CounterApp'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import PokemonApp from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      <PokemonApp />
    </Provider>
  </React.StrictMode>
)
