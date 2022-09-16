// URL+id con la info de los productos
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions";
import Loading from "../Loading/Loading";


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
        <div>
          
            <div>
                <h1 >{myProduct.name}</h1>
                <ul>
                    <li>
                        <div>
                            <img src={myProduct.image} alt={myProduct.name}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Price:</h2>
                            <p>{myProduct.price}</p>
                            <h2 className="caracts">Rating:</h2>
                            <p>⭐ {myProduct.rating}</p>
                            <h2 className="caracts">Description:</h2>
                            <p >📌{myProduct.detail}</p>
                            <h2 className="caracts">Stock:</h2>
                            <p>{myProduct.stock}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}