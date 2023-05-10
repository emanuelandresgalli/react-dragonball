import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './GalleryDetails.css';



const GalleryDetail = () => {
     const {id} = useParams()
    const [card, setCards] = useState({})

    useEffect(()=>{
       const getCardById = async ()=>{ 
        const res = await axios.get(`http://localhost:3000/cards/${id}`)
    //    console.log(res.data)
        setCards(res.data)
    }
        getCardById()
    },[])
  return (
    <div>
      {card ? (
        <>
        <section>
          
          <Link to="/gallery">
        <figure className="contenedor_details">
         
          <div className="contenedor_nombre_character">
          <h2>{card.name}</h2>
          <h3>{card.country}</h3>
          </div>
        
          <img className="img_details" src={card.image} alt="{card.name}" />
          <div className="contenedor_footer_imagen">
          </div>

          </figure>
          </Link>
          </section>
        </>
      ): null}
    </div>
  )
}

export default GalleryDetail;
