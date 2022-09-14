import React from 'react';
import Pagination from './Pagination';

export default function Home() {

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

        <div>
            <Pagination animalsPerPage={animalsPerPage} pagination={pagination} allProducts={allProducts.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>

      </div>
  )

}
