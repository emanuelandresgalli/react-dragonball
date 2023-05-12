import React from 'react'
import { useContext } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { JwtContext } from '../../context/jwtContext'
import { ButtonLogout } from '../../components/ButtonLogout'

const Nav = () => {
    const {jwt} = useContext(JwtContext)
    const name = localStorage.getItem("user")
  return (
   
      <nav>
        <ul className='contenedor_li'>
            <li>
                <Link to="/">家</Link>
            </li>
            {jwt && (
            <>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <ButtonLogout/>
          </li>
          </>
        )}
             {jwt === null && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <span className='nav-toggle'></span>
              <span></span>
              <span></span>
            </li>
          </>
        )}
        {name != undefined && (<li>Bienvenido {name}</li>)}
      </ul>
      </nav>
 
  )
}

export default Nav