import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Gallery.css'

const Gallery = () => {
  const [characters, setCharacters]= useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(`http://localhost:3000/cards`)
      
        setCharacters(res.data)
    }
    getCharacters();
  },[]);
  return (
   <>
   <div className="gallery">
     {characters.map((card)=>(
        <Link key={card.id} to={`${card.id}`}>
          
          <figure className="contenedor_gallery" >
            <h3 className="gallery_titulo">{card.name}</h3>
            <img className="gallery_img" src={card.image} alt="{card.name}" />
          </figure>
        
        </Link>
    ))}
  </div>
  
  </>
)
}
export default Gallery;
