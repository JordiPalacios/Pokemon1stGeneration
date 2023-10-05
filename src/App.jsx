import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/notFound'
import Header from './shared/header'
import Main from './shared/main'

function App() {
  return (
    <>
      <div className='mainPage'>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
