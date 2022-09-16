import LogIn from '../Login/LogIn';
import './Home.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ComponentCard } from '../ComponentCard/ComponentCard';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer'

export default function Home() {

  /* TUVE QUE COMENTAR EL PAGINATION XQ TIRABA ERROR AL NO TENER TODAVIA EL ALLPRODUCTS,
  SUPONGO QUE ESTA BIEN PERO HASTA QUE NO HAYA ALGO QUE MOSTRAR NO SABREMOS */


  const allProducts = useSelector(state => state.allProducts)

  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [animalsPerPage, setAnimalsPerPage] = useState(5); // Hasta 5 cards por pag

  const indexLastAnimal = currentPage * animalsPerPage; 
  const indexFirstAnimal = indexLastAnimal - animalsPerPage; 
  const animalsInCurrentPage = allProducts.slice(indexFirstAnimal, indexLastAnimal);  //CHEQUEAR QUE STATE PUSIERON EN EL REDUCER !!!

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (

    <div>
      <h1>ESTAMOS EN HOME</h1>
      <h1>PET LOVE STORE</h1>

      <div className='home-container'>
        <div className='container-wrap'>
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
                  Filter by Race 
                  <select className='select'>
                    <option value='All'>All</option>
                    <option value='Raza blabla'>Raza blabla </option>
                    <option value='Raza blabla2'>Raza blabla 2</option>
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
                  <select className='select'>
                    <option disabled selected >Select</option>
                    <option value='Lower Price'>Lower Price</option>
                    <option value='Higher Price'>Higher Price</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
       
  <h1>ESTAMOS EN EL HOME</h1>


      <div>
       <Pagination animalsPerPage={animalsPerPage} pagination={pagination} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
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
      </div>
  )
}
