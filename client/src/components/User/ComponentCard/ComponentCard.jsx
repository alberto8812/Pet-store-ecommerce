//para llevarnos el comp al home
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProducts } from '../../../redux/actions/index';
import Loading from '../Loading/Loading'
import CardProduct from "../Card/Card";
import { Grid,Box } from "@mui/material";
import './ComponentCard.css';
import '../Home/Home.css';
////////
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
        <Grid container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        {/*<div className='container'>*/}
            {animalsInCurrentPage?.map(v => {
                if (v.deleted) return <></>
                return (
                    <Box sx={{display:'grid',columnGap:1,rowGap:1,gridTemplateColumns:'repeat(.5,500px)',}}>{/*ajuste dinamica de las cards */}
                    <CardProduct className='cardHome'
                    key={v.id}
                    id={v.id}
                    image={v.image ? v.image : 'https://images5.alphacoders.com/312/312789.jpg'}
                    name={v.name}
                    category={v.category.name}
                    genre={v.genre.name}
                    price={v.price}
                    reviews={v.reviews}
                    />
                     </Box>
                    )})}

                    {/* </div>*/}
        </Grid>
    )
}
//