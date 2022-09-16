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
                  <select className='select'>
                    <option disabled selected >Select</option>
                    <option value='Lower Price'>Lower Price</option>
                    <option value='Higher Price'>Higher Price</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>

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
