import React from 'react';

export default function Pagination({animalsPerPage, pagination, allProducts, currentPage, setCurrentPage}) {
    const pageNumber = [];

    for (let i = 1; i < Math.ceil(allProducts/animalsPerPage); i++) {
        pageNumber.push(i);     
    }

    function handleNext(e){
        e.preventDefault();
        if(e.target.name === 'next' && currentPage < pageNumber.length) {
            setCurrentPage(currentPage +1);
        } 
        if(e.target.name === 'prev' && currentPage > 1){
            setCurrentPage(currentPage -1)
        }
    }

    return(
        <nav>
            <button name='prev' onClick={e => handleNext(e)}>Prev</button>
            <ul>
                {
                    pageNumber?.map(page => (
                        <li key={page} value={page} onClick={()=> pagination(page)}>{page}</li>
                    ))
                }
            </ul>
            <button name='next' onClick={e => handleNext(e)}>Next</button>
        </nav>
    )
}
