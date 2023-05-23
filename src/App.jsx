import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'

import Container from './components/layoult/Container'
import Home from './components/pages/Home'
import Login from './components/pages/Login'

function App() {

  return (
    <BrowserRouter>
      
      <Container customClass="min-height">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container >
    </BrowserRouter>
  )
}

export default App
