import React from "react";
import '../card-component/Cards.css'

export function CardsComponent({namePokemon}) {
    return ( 
        <div className="card">
          <div className="card-content">
            <h2>{namePokemon}</h2>
            <img src="imagen.jpg" alt="Imagen de la tarjeta" className="card-image" />
            <h4>Contenido de la tarjeta</h4>
          </div>
        </div>
      );  
    }
    

export default CardsComponent