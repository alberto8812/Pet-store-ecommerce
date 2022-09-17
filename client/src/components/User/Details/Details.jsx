import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions";
import Loading from "../Loading/Loading";
import './Details.css'

export default function Detail() {
    const [carga, setCarga] = useState(true);
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(getDetails(id)).then(() => setCarga(false))
    }, [dispatch, id])

    const myProduct = useSelector(state => state.details)

    if (carga) {
        return <Loading />;
    }

    return (
        <div className="divDetail">
            <div>
                <h1 className="name">{myProduct.name}</h1>
                <ul className="asd">
                    <li>
                        <div>
                            <img src={myProduct.image} alt={myProduct.name}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className="caracts">Price:</h2>
                            <p>{myProduct.price}</p>
                            <h2 className="caracts">Rating:</h2>
                            <p>⭐ {myProduct.rating}</p>
                            <h2 className="caracts">Description:</h2>
                            <p >📌{myProduct.detail}</p>
                            <h2 className="caracts">Stock:</h2>
                            <p>{myProduct.stock}</p>
                            <h2 className="caracts">Genre:</h2>
                            <p>{myProduct.genre.name}</p>
                            <h2 className="last">Category:</h2>
                            <p>{myProduct.category.name}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

