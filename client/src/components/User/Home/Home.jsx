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
  const [order, setOrder] = useState('');

  // useEffect(() => {
  //   dispatch(testFilters({ name, genre }));
  // }, [dispatch]);


  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(9); // Hasta 5 cards por pag
  //const [filterAge, setFilterAge] = useState(''); 
  const [filterCategory, setFilterCategory] = useState(''); 
  const [filterName, setFilterName] = useState(''); 
  
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
  }

  function onChangeAge(e) { //¿ESTE LO BORRAMOS MEJOR?
    // setFilterAge(e.target.value)
    // dispatch(getProducts)
  }

  function onChangeCategory(e) {
    setFilterCategory(e.target.value)
    dispatch(getProducts(filterName, e.target.value))
  }

  function onChangeName(e) {
    dispatch(getProducts(filterName, filterCategory))
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
              <SearchBar setFilterName={setFilterName} onChangeName={onChangeName}></SearchBar>
              <li>
                <div>
                  Filter by Age 
                  <select className='select' onChange={onChangeAge}>
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
                  <select className='select' onChange={onChangeCategory}>
                    <option value='All'>All</option>
                    <option value='accessories'>Accesories</option> 
                    {/* Corregir back es "accesories" */}
                    <option value='food'>Food</option>
                    <option value='toys'>Toys</option>
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
    <Filter_Sort handlePrice={handlePrice}/>
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

