import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


export default function Card({id, image, name, price}){ //Estas serían las props a mostrar en el home?
   //luego asegurarnos que son los nombres correctos. 
    return (
        <Link key={id} className="" to= {`/details/${id}`}>
            <img src={image} alt= "not found" className="cardimg"/>
            <h3><b className="">{name}</b></h3>
            <p className="">{price}</p> 
            <button>Aca iria corazon</button>
            {/* Acá también ponemos btn para añadir al carrito? */}
        </Link>
        
    )
}