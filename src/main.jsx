import React from 'react'
import ReactDOM from 'react-dom/client'
import Pokedex from './Pokedex.jsx'
import './styles/index.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Pokedex />
    </BrowserRouter>
  </React.StrictMode>,
)
