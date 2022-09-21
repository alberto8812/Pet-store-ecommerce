import React, { useState } from 'react';
import './Pagination.css';

export default function Pagination({ animalsPerPage, products, currentPage, setCurrentPage }) {
    const pageNumber = [];
    const [input, setInput] = useState(1);

    for (let i = 1; i < Math.ceil(products / animalsPerPage); i++) {
        pageNumber.push(i);
    }

    function handleNext(e) {
        e.preventDefault();
        if (e.target.name === 'next' && currentPage < pageNumber.length) {
            setCurrentPage(currentPage + 1);
        }
        if (currentPage === pageNumber.length) {
            e.target.name(disable);
        }
        const newInputValue = input + 1;
        setInput(newInputValue)
    };

    function handlePrev(e) {
        e.preventDefault();
        if (e.target.name === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        if (currentPage === 1) {
            e.target.name(disable)
        }
        const newInputValuePrev = input - 1;
        setInput(newInputValuePrev)

    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') { 
            setCurrentPage(parseInt(e.target.value))
            if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > Math.ceil(pageNumber.length) || isNaN(parseInt(e.target.value))) {
                setCurrentPage(1)
                setInput(1)
            } else {
                setCurrentPage(parseInt(e.target.value));
                setInput(parseInt(e.target.value));
            }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value);

    }

    return (
        <div className="paginado">
           
                    <button className='btn-paginado' name='prev' onClick={e => handlePrev(e)}>Prev</button>
               
                    <input className='input-pag' onChange={e => onChange(e)} onKeyDown={(e) => onKeyDown(e)} name="animalsPerPage" autoComplete="off" value={input} />
               
                    <p className='parrafo-pag'>de {Math.ceil(pageNumber.length)}</p>
                
                    <button className='btn-paginado' name='next' onClick={e => handleNext(e)}>Next</button>
             
        </div>

    )
}

