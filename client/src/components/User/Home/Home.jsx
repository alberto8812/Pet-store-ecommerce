import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import "./Home.css";
import Carousel from "../carousel/Carousel";
import Filter_Sort from "../Filters_Sort/Filters_Sort";


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  // useEffect(() => {
  //   dispatch(testFilters({ name, genre }));
  // }, [dispatch]);


  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 5 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage;
  const indexFirstAnimal = indexLastAnimal - animalsPerPage;
  const animalsInCurrentPage = allProducts.slice(
    indexFirstAnimal,
    indexLastAnimal
  ); //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!



  function handlePrice(e) {
    dispatch(sortByPrice(e.target.value))
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box border={2} m={5}></Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={2}>
            <Carousel />
          </Box>
        </Grid>
      <div className='home-container'>
        <div className='container-wrap'>
            <div>
              <Pagination
                animalsPerPage={animalsPerPage}
                allProducts={allProducts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>

     <Filter_Sort/>     

            <div>
              <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />
            </div>

            <a style={{ textDecoration: "none" }} href="#">
              <button>Go Up ↑</button>
            </a>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
