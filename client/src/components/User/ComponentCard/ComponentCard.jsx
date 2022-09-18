//para llevarnos el comp al home
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProducts } from '../../../redux/actions/index';
import Loading from '../Loading/Loading'
import Card from "../Card/Card";
import '../Home/Home.css'

export const ComponentCard = ({animalsInCurrentPage}) => {
    const dispatch = useDispatch()
    const [carga, setCarga] = useState(true);

    useEffect(() => {
        dispatch(getProducts()).then(() => setCarga(false)) 
    }, [dispatch])

 

    if (carga) {
        return <Loading />;
      }

    return (
        <div className='container'>
            {animalsInCurrentPage.length > 0 ?
            animalsInCurrentPage?.map(v => {
                return (<Card className='cardHome'
                    key={v.id}
                    id={v.id}
                    image={v.image ? v.image : v.name}
                    name={v.name}
                    price={v.price}
                    rating={v.rating}
                    category={v.category.name}
                    />)}) : `We couldn't load the products, refresh the page`}

        </div>
    )
}
