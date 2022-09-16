import LogIn from '../Login/LogIn';

import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer'
import { testFilters } from '../../../redux/actions';
import { Box,Grid } from "@material-ui/core";
import Carousel from '../carousel/Carousel';

export default function TestHome() {
    let dispatch=useDispatch()
  /* TUVE QUE COMENTAR EL PAGINATION XQ TIRABA ERROR AL NO TENER TODAVIA EL ALLPRODUCTS,
  SUPONGO QUE ESTA BIEN PERO HASTA QUE NO HAYA ALGO QUE MOSTRAR NO SABREMOS */
useEffect(() => {
    dispatch(testFilters({name,genre}))
}, [dispatch])

  const allProducts = useSelector(state => state.productTest)
const [name, setName] = useState('');
const [genre, setGenre] = useState('');

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(5); // Hasta 5 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage; 
  const indexFirstAnimal = indexLastAnimal - animalsPerPage; 
  const animalsInCurrentPage = allProducts.slice(indexFirstAnimal, indexLastAnimal);  //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


const handleSubmit=()=>{
    dispatch(testFilters({name,genre}));
}
  return (

    <div>
      <Grid 
      container
      >
        <Grid item xs={12}> 
        <Box 
        border={2}
        m={5}
        >
          </Box></Grid>
    <Grid item xs={12}>
      <Box
      border={2}
      >
        <Carousel/>
    </Box>
    </Grid>
      <div className='home-container'>
        <div className='container-wrap'>

       
  <h1>ESTAMOS EN EL HOME</h1>
    

      <div>
        {/* <Pagination animalsPerPage={animalsPerPage} pagination={pagination} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      </div>
      <div>
        <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />


      </div>

      <div>
        <Footer />
      </div>
    </div>

        <div>
           {/* <Pagination animalsPerPage={animalsPerPage} pagination={pagination} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
        </div>

      </div>
      </Grid>
      </div>
  )
}