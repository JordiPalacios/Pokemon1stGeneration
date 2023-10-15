import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PokemonProvider } from './components/pokemonContext.jsx'
import { PokemonDetailsProvider } from './components/pokemonDetailsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <PokemonDetailsProvider>
          <App />
        </PokemonDetailsProvider>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
