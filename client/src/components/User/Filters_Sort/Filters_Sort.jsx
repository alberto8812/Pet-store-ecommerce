// componente con las funciones de filtrado y ordenamiento
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Home/Home.css";
import SearchBar from "../SearchBar/SearchBar";
import { sortByPrice, getProducts } from "../../../redux/actions";

const Filter_Sort = ({update, setUpdate, setCurrentPage}) => {
  const dispatch = useDispatch();
  //const [filterCategory, setFilterCategory] = useState(''); 
  //const [filterName, setFilterName] = useState(''); 
  //const [filterAge, setFilterAge] = useState('');
  const [filtersearch, setfiltersearch] = useState({age:'',category:'',name:'',genre:''})
  const [order, setOrder] = useState('');

  function chargeAllProducts(e){
    e.preventDefault(e);
   // let selectList = document.querySelectorAll('.default-select');
   // selectList.forEach(select => select.value = 'DEFAULT');
    setCurrentPage(1);
    dispatch(getProducts({age:'',category:'',name:'',genre:''}));
  }

  function handlePrice(e) {
    e.preventDefault();
    dispatch(sortByPrice(e.target.value));
    setUpdate(update===' '?'probando':' ')
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  function onChangeAge(e) { 
    setfiltersearch({...filtersearch,age:e.target.value==='DEFAULT'?'':e.target.value})
    //dispatch(getProducts(filterAge, e.target.value))
    setUpdate(update===' '?'probando':' ');
    setOrder(e.target.value);
    setCurrentPage(1);

  }

  function onChangeCategory(e) {
    setfiltersearch({...filtersearch,category:e.target.value})
    //dispatch(getProducts(filterName, e.target.value))
      setUpdate(update===' '?'probando':' ');
      setOrder(e.target.value);
      setCurrentPage(1);
  }
  useEffect(() => {
   console.log(filtersearch)
    dispatch(getProducts(filtersearch));
    //dispatch(getProducts(filterCategory));
   // setUpdate(update===' '?'probando':' ');
  
  }, [filtersearch])
  function onChangeName(e) {
    console.log(filtersearch,"onchange")
    dispatch(getProducts(filtersearch));//, filterCategory
    setCurrentPage(1);
  }

  return (
    <div>
      <ul className='navbar'>
        <SearchBar setfiltersearch={setfiltersearch} onChangeName={onChangeName} filtersearch={filtersearch}></SearchBar>
        <button onClick={e => chargeAllProducts(e)}>All Products</button>
        <li className='content-select'>
          Filter by Age 
          <select className='select' defaultValue={"DEFAULT"} onChange={e => onChangeAge(e)}>
            <option value="DEFAULT">All</option>
            <option value='Puppy'>Puppy</option>
            <option value='Young'>Young</option>
            <option value='Adult'>Adult</option>
          </select>
        </li>
        <li className='content-select'>
          Filter by Categories
          <select className='select' onChange={e => onChangeCategory(e)}>
            <option value="DEFAULT">All</option>
            <option value='accessories'>Accessories</option>
            <option value='food'>Food</option>
            <option value='toys'>Toys</option>
          </select>
        </li>
        <li className='content-select'>
          Sort by Price
          <select className='select' defaultValue={"DEFAULT"} onChange={e => handlePrice(e)}>
            <option value="DEFAULT" disabled selected >Select</option>
            <option value='higherPrice'>Higher Price</option>
            <option value='lowerPrice'>Lower Price</option>
          </select>
        </li>
      </ul>
    </div >
  )
}

export default Filter_Sort
