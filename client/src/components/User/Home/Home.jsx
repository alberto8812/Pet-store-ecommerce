import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import "./Home.css";
import Carousel from "../carousel/Carousel";
import {
  sortByPrice,
  getProducts,
  getAllProducts,
} from "../../../redux/actions";
// import Filter_Sort from "../Filters_Sort/Filters_Sort";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const status = useSelector((state) => state.status);
console.log(products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  useEffect(() => {
  ////se ejecuta para update del home 
  }, [status]);

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 9 cards por pag

  // const [update, setUpdate] = useState(' ')

  const indexLastAnimal = currentPage * animalsPerPage;
  const indexFirstAnimal = indexLastAnimal - animalsPerPage;
  const animalsInCurrentPage = products.slice(
    indexFirstAnimal,
    indexLastAnimal
  );

  return (
    <div className="home">
      {/* <div className='divNBFun'>
    <Filter_Sort update={update} setUpdate={setUpdate} setCurrentPage={setCurrentPage}/>
    </div> */}
      <Grid container>
        <Grid item xs={12}>
          {/* <Box border={2} m={5}></Box> */}
        </Grid>
        <Grid item xs={12}>
          <Box border={2} overflow="hidden">
            <Carousel />
          </Box>
        </Grid>
          <Pagination
            animalsPerPage={animalsPerPage}
            allProducts={allProducts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        <div>
          <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />
        </div>
      </Grid>

              <a style={{'textDecoration': 'none'}} href="#">
                  <button className="goUp-btn">Go Up</button>
              </a>

      <Footer />
    </div>
  );
}
