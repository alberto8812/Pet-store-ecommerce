import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Grid } from "@material-ui/core";
import "./Home.css";
import Carousel from "../carousel/Carousel";
import { sortByPrice, getProducts } from "../../../redux/actions";
import Filter_Sort from "../Filters_Sort/Filters_Sort";


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  // const [order, setOrder] = useState('');

  // useEffect(() => {
  //   dispatch(testFilters({ name, genre }));
  // }, [dispatch]);

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 9 cards por pag
  
  //const [filterAge, setFilterAge] = useState(''); 
  // const [filterCategory, setFilterCategory] = useState(''); 
  // const [filterName, setFilterName] = useState(''); 
  const [update, setUpdate] = useState(' ')
  
  const indexLastAnimal = currentPage * animalsPerPage;
  const indexFirstAnimal = indexLastAnimal - animalsPerPage;
  const animalsInCurrentPage = allProducts.slice(
    indexFirstAnimal,
    indexLastAnimal
  ); //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!



  return(
    <div className='home'>
      <Grid container>
        <Grid item xs={12}>
          <Box border={2} m={5}></Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={2}>
            <Carousel />
          </Box>
        </Grid>
    <div className='divNBFun'>
    <Filter_Sort update={update} setUpdate={setUpdate} setCurrentPage={setCurrentPage}/>
    </div>
    <div>
        <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />
    </div>
    <div>
        <Pagination
                animalsPerPage={animalsPerPage}
                allProducts={allProducts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
    </div>
    </Grid>
    </div>
  )
}

