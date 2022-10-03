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
import Recomendations from "../Recomendations/Recomendations";

///////////////
export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const ALLproducts = useSelector((state) => state.allProducts);
  const status = useSelector((state) => state.status);

  
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(ALLproducts,products)
  useEffect(() => {
  ////se ejecuta para update del home 
  }, [status]);

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 9 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage;
  const indexFirstAnimal = indexLastAnimal - animalsPerPage;
  const animalsInCurrentPage = products.slice(
    indexFirstAnimal,
    indexLastAnimal
  );

  return (
    <div className="home">
      <Grid container>
        <Grid item xs={12}>
          {/* <Box border={2} m={5}></Box> */}
        </Grid>
        <Grid item xs={12}>
          <Box border={2} overflow="hidden">
            <Carousel />
          </Box>
        </Grid>


        <div>
        <Pagination
            animalsPerPage={animalsPerPage}
            products={products.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        
        <div>
          <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />
        </div>
      </Grid>

        {(products.length === 0) && (<div className="not-found-message-container"><p >Product not Found!</p>
        <Recomendations />  </div>)}   {/*<img className="img-notFound"src={notFound} alt='not found'/>*/}

              <a style={{'textDecoration': 'none'}} href="#">
                  <button className="goUp-btn">Go Up</button>
              </a>

      <Footer />
    </div>
  );
}
