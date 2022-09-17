import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


export default function Card({ id, image, name, price, rating }) {
    return (
        <div className="cards">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{name}</h1>
                        <img src={image} alt={`${name}`} className='imageProduct' />
                        <h2>Price:</h2><h4>{price}</h4>
                    </div>
                    <div className="flip-card-back">
                        <h1>{name}</h1>
                        <h2>Price:</h2>
                        <h4>{price}</h4>
                        <h2>Rating:</h2>
                        <h4>⭐ {rating}</h4>
                        <Link to={`/products/detail/${id}`}><span>Show more</span></Link>
                    </div>
                </div>

            </div>

        </div>

    )
}
