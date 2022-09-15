import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ id, image, name, price, rating }) {
    return (
        <div>
            <div>
                <div >
                    <div>
                        <h1>{name}</h1>
                        <img src={image} alt={`${name}`}/>
                    </div>
                    <div >
                        <h1>{name}</h1>
                        <h2>Price:</h2>
                        <h4>{price}</h4>
                        <h2>Rating:</h2>
                        <h4>⭐ {rating}</h4>
                        <Link to={`/detail/${id}`}><span>Show more</span></Link>
                    </div>
                </div>

            </div>

        </div>

    )
}



/*

export default function Card({id, image, name, price}){ //Estas serían las props a mostrar en el home?
   //luego asegurarnos que son los nombres correctos. 
    return (
        <Link key={id} className="" to= {`/details/${id}`}>
            <img src={image} alt= "not found" className="cardimg"/>
            <h3><b className="">{name}</b></h3>
            <p className="">{price}</p> 
            <button>Aca iria corazon</button>
            { Acá también ponemos btn para añadir al carrito?}
            </Link>
        
            )
        }

        */