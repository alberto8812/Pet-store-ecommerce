import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Home/Home.css";
import { sortByPrice, getProducts } from "../../../redux/actions";
import './Filters_Sort.css'

const Filter_Sort = ({update, setUpdate, setCurrentPage}) => {
  const dispatch = useDispatch();
  //const [filterCategory, setFilterCategory] = useState(''); 
  //const [filterName, setFilterName] = useState(''); 
  //const [filterAge, setFilterAge] = useState('');
  const [filtersearch, setfiltersearch] = useState({age:'',category:'',name:'',genre:''})
  const [order, setOrder] = useState('');

  function chargeAllProducts(e){
    e.preventDefault(e);
   let selectList = document.querySelectorAll('.default-select');
   selectList.forEach(select => select.value = 'DEFAULT');
    setCurrentPage(1);
    dispatch(getProducts({age:'',category:'',name:'',genre:''}));
  }

  function handlePrice(e) {
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
    setfiltersearch({...filtersearch,category:e.target.value==='DEFAULT'?'':e.target.value})
    //dispatch(getProducts(filterName, e.target.value))
      setUpdate(update===' '?'probando':' ');
      setOrder(e.target.value);
      setCurrentPage(1);
  };

  function handlePet(e) {
    setfiltersearch({...filtersearch,genre:e.target.value})
    //dispatch(getProducts(filterName, e.target.value))
      setUpdate(update===' '?'probando':' ');
      setOrder(e.target.value);
      setCurrentPage(1);
  }

  useEffect(() => {
  //  console.log(filtersearch)
    dispatch(getProducts(filtersearch));
    //dispatch(getProducts(filterCategory));
   // setUpdate(update===' '?'probando':' ');
  
  }, [filtersearch])


  return (
    <div className='container_navbar'>
     
      
        {/* <li className='content-select'> */}
          <select className='default-select' defaultValue={"DEFAULT"} onChange={e => onChangeAge(e)}>
            <option value="DEFAULT" hidden selected>Age</option>
            <option value='Puppy'>Puppy</option>
            <option value='Young'>Young</option>
            <option value='Adult'>Adult</option>
          </select>
        {/* </li> */}
        {/* <li className='content-select'> */}         
          <select className='default-select' defaultValue={"DEFAULT"} onChange={e => onChangeCategory(e)}>
            <option value="DEFAULT" hidden selected>Categories</option>
            <option value='accessories'>Accessories</option>
            <option value='food'>Food</option>
            <option value='toys'>Toys</option>
          </select>
        {/* </li> */}
        {/* <li className='content-select'> */}         
          <select className='default-select' defaultValue={"DEFAULT"} onChange={e => handlePrice(e)}>
            <option value="DEFAULT" hidden selected>Price</option>
            <option value='higherPrice'>Higher Price</option>
            <option value='lowerPrice'>Lower Price</option>
          </select>
          <select className='default-select' defaultValue={"DEFAULT"} onChange={e => handlePet(e)}>
            <option value="DEFAULT" hidden selected>Pet</option>
            <option value='cat'>Cat</option>
            <option value='dog'>Dog</option>
          </select>
          <button className="allProducts-btn" onClick={e => chargeAllProducts(e)}>All Products</button>
        {/* </li> */}
   
    </div >
  )
}

export default Filter_Sort;
