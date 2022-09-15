// URL+id con la info de los productos
import React from "react";
import './Details.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, clear } from '../../../redux/actions/index'; 
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'

export default function Details(){

    const dispatch = useDispatch();
    const {id} = useParams()

    React.useEffect(() => {
        dispatch(getDetails(id))
    }, [id]);
    
    React.useEffect(() => {
        dispatch(clear())
    }, [dispatch])

    const details = useSelector(state => state.details);

    if (carga) {
        return <Loading />;
    }
    return (
        <div className="">
            <div className="">
                <img src= {details.image} className=''/>
                <h2 className="">{details.name}</h2>
                <h4 className="">Price: $ {details.price}</h4>
                <h4 className="">Age: {details.age}</h4>
                <h4 className="">Race: {details.race}</h4>
                <h4 className="">Species: {details.species} </h4>
                <h4 className="">Stock: {details.stock} </h4>
                <h4 className="">Categories: </h4>
                    {details.categories?.map(category =>
                        <div>
                            <h2>{category.name}</h2>
                        </div>
                    )} 
            </div>
            <button>btn para fav</button>
            <button>btn para carrito</button>
            {/* Falta agregar contador para comprar más de una unidad 
            y que obviamente no exceda al stock disponible*/}
            {/* Falta añadir la lógica de los botones también */}
            
            <Link className='' to= {'/home'}id="click">
                Back to home
            </Link>
        </div>
    )
}