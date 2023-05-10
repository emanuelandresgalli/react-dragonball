import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './core/nav/Nav'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Login from './pages/Login'
import Register from './pages/Register'
import { JwtContext } from './context/jwtContext'
import { RequireAuth } from './components/RequireAuth'
import GalleryDetail from './pages/GalleryDetails'


function App() {

  const [jwt, setJwt] = useState(null)
console.log(jwt)
  return (
    <>
    <JwtContext.Provider value={{jwt, setJwt}}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/gallery' element={<RequireAuth><Gallery/></RequireAuth>}></Route>
        <Route path='/gallery/:id' element={<RequireAuth><GalleryDetail/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </JwtContext.Provider>
    </>
  )
}

export default App
