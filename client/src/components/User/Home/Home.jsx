import Footer from '../Footer/Footer';
import LogIn from '../Login/LogIn';
import './Home.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import Pagination from '../Pagination/Pagination';

export default function Home() {

/* TUVE QUE COMENTAR EL PAGINATION XQ TIRABA ERROR AL NO TENER TODAVIA EL ALLPRODUCTS,
SUPONGO QUE ESTA BIEN PERO HASTA QUE NO HAYA ALGO QUE MOSTRAR NO SABREMOS */


  const allProducts = useSelector(state => state.allProducts)

    //PAGINADO
//   const [currentPage, setCurrentPage] = useState(1);
//   const [animalsPerPage, setAnimalsPerPage] = useState(5); // Hasta 5 cards por pag
//   const indexLastAnimal = currentPage * animalsPerPage; 
//   const indexFirstAnimal = indexLastAnimal - animalsPerPage; 
// const animalsInCurrentPage = allProducts.slice(indexFirstAnimal, indexLastAnimal);  //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!

//   const pagination = (pageNumber) => {
//       setCurrentPage(pageNumber);
//  }

  return (

      <div className='home-container'>
        <div className='container-wrap'>

       
  <h1>ESTAMOS EN EL HOME</h1>


        <div>
           {/* <Pagination animalsPerPage={animalsPerPage} pagination={pagination} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
        </div>

      <div>
      <Footer/>
      </div>

      </div>
      </div>
  )
}
