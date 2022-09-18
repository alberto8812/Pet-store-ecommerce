// componente con las funciones de filtrado y ordenamiento
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Home/Home.css";
import SearchBar from "../SearchBar/SearchBar";
import { sortByPrice, getProducts } from "../../../redux/actions";

const Filter_Sort = ({update, setUpdate}) => {
  const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = useState(''); 
  const [filterName, setFilterName] = useState(''); 
  const [filterAge, setFilterAge] = useState('')

  function handlePrice(e) {
    e.preventDefault();
    dispatch(sortByPrice(e.target.value));
    setUpdate(update===' '?'probando':' ')
    setOrder(e.target.value);
  }


  function onChangeAge(e) { 
    setFilterAge(e.target.value)
    dispatch(getProducts(filterAge, e.target.value))
    setUpdate(update===' '?'probando':' ')
  }

  function onChangeCategory(e) {
    setFilterCategory(e.target.value)
    dispatch(getProducts(filterName, e.target.value))
      setUpdate(update===' '?'probando':' ')
  }

  function onChangeName(e) {
    dispatch(getProducts(filterName, filterCategory))
  }

  return (
    <div>
      <ul className='navbar'>
        <SearchBar setFilterName={setFilterName} onChangeName={onChangeName}></SearchBar>
        <li className='content-select'>
          Filter by Age 
          <select className='select' onChange={onChangeAge}>
            <option value='All'>All</option>
            <option value='Puppy'>Puppy</option>
            <option value='Young'>Young</option>
            <option value='Adult'>Adult</option>
          </select>
        </li>
        <li className='content-select'>
          Filter by Categories
          <select className='select' onChange={onChangeCategory}>
            <option value='All'>All</option>
            <option value='accessories'>Accessories</option>
            <option value='food'>Food</option>
            <option value='toys'>Toys</option>
          </select>
        </li>
        <li className='content-select'>
          Sort by Price
          <select className='select' onChange={e => handlePrice(e)}>
            <option disabled selected >Select</option>
            <option value='higherPrice'>Higher Price</option>
            <option value='lowerPrice'>Lower Price</option>
          </select>
        </li>
      </ul>
    </div >
  )
}

export default Filter_Sort
