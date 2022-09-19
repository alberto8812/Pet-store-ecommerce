import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import "./Home.css";
import Carousel from "../carousel/Carousel";
import { sortByPrice } from "../../../redux/actions";


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [order, setOrder] = useState('');

  // useEffect(() => {
  //   dispatch(testFilters({ name, genre }));
  // }, [dispatch]);


  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 9 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage;
  const indexFirstAnimal = indexLastAnimal - animalsPerPage;
  const animalsInCurrentPage = allProducts.slice(
    indexFirstAnimal,
    indexLastAnimal
  ); //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!



  function handlePrice(e) {
    e.preventDefault();
    dispatch(sortByPrice(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
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

          <div>
            <ul className='filters'>
              <li>
                <div>
                  Filter by Age 
                  <select className='select'>
                    <option value='All'>All</option>
                    <option value='Puppy'>Puppy</option>
                    <option value='Young'>Young</option>
                    <option value='Adult'>Adult</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  Filter by Categories
                  <select className='select'>
                    <option value='All'>All</option>
                    <option value='Accesories'>Accesories</option>
                    <option value='Food'>Food</option>
                    <option value='Toys'>Toys</option>
                  </select>
                </div>
              </li>
              <li>
                <div>
                  Sort by Price
                  <select className='select' onChange={e => handlePrice(e)}>
                    <option disabled selected >Select</option>
                    <option value='higherPrice'>Higher Price</option>
                    <option value='lowerPrice'>Lower Price</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>

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
