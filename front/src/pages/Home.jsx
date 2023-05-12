// // import React from 'react'
 import { Link } from "react-router-dom"
 import "./Home.css"
 import video from "../assets/abstract-son-goku-super-saiyan-blue-dragon-ball-super-moewalls.com.mp4";

const Home = () => {
  return (
    // <h1>Home</h1>
    <div className="home">
    <Link  to="/gallery">
        <div className="background-video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
    </Link>
    </div>
  )
}

export default Home
