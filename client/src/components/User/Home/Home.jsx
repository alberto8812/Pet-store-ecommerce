import LogIn from '../Login/LogIn';
import './Home.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer'

export default function Home() {

  const allProducts = useSelector(state => state.allProducts);

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(5); // Hasta 5 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage; 
  const indexFirstAnimal = indexLastAnimal - animalsPerPage; 
  const animalsInCurrentPage = allProducts.slice(indexFirstAnimal, indexLastAnimal);  //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!

  // const pagination = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // }

  return (
      <div className='home-container'>
        <div className='container-wrap'>

       

      <div>
        <Pagination animalsPerPage={animalsPerPage} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <div>
        <ComponentCard animalsInCurrentPage={animalsInCurrentPage} />


      </div>

              <a style={{'textDecoration': 'none'}} href="#">
                  <button>Go Up ↑</button>
              </a>

      <div>
        <Footer />
      </div>

    </div>

      </div>
  )
}
