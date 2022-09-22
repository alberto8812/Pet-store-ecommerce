// componente con las funciones de filtrado y ordenamiento
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../Home/Home.css";

import {sortByPrice,getProducts} from "../../../redux/actions";
import './Filters_Sort.css'

const Filter_Sort = ({update, setUpdate, setCurrentPage,setfiltersearch,filtersearch}) => {
  const dispatch = useDispatch();

  
  const [order, setOrder] = useState('');


  // funcion que reacarga todso los productos 
  function chargeAllProducts(e){
    e.preventDefault(e);
   //let selectList = document.querySelectorAll('.default-select');
   //selectList.forEach(select => select.value = '');
    setCurrentPage(1);
    dispatch(getProducts({age:'',category:'',name:'',genre:''}));
  }

  //funcion que ordena por precio
  function handlePrice(e) {
    dispatch(sortByPrice(e.target.value));
    setUpdate(update===' '?'probando':' ')
    setOrder(e.target.value);
    setCurrentPage(1);
  }

  //funcion que ordena por edades
  function onChangeAge(e) { 
    setfiltersearch({...filtersearch,age:e.target.value})
    setUpdate(update===' '?'probando':' ');
    setOrder(e.target.value);
    setCurrentPage(1);

  }

//funcion que ordena por categorias
  function onChangeCategory(e) {
      setfiltersearch({...filtersearch,category:e.target.value})

      setUpdate(update===' '?'probando':' ');
      setOrder(e.target.value);
      setCurrentPage(1);
  };


  //funacion que ordena por  genero
  function handlePet(e) {
    setfiltersearch({...filtersearch,genre:e.target.value})
      setUpdate(update===' '?'probando':' ');
      setOrder(e.target.value);
      setCurrentPage(1);
  }


  ///dispacht de los filtros
  useEffect(() => {
    dispatch(getProducts(filtersearch));
  }, [filtersearch])

  function onChangeName(e) {
   
    dispatch(getProducts(filtersearch));//, filterCategory
    setCurrentPage(1);
  }

  return (
    <div>
       <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color:"rgb(234, 208, 240)"}}>
        <InputLabel id="demo-simple-select-standard-label"  sx={{ color:"rgb(234, 208, 240)"}}>Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filtersearch.age}
          onChange={e => onChangeAge(e)}
          label="Age"
          sx={{ color:"rgb(234, 208, 240)"}}
        >
          <MenuItem value=""  >
            <em>All</em>
          </MenuItem>
          <MenuItem value='Puppy'>Puppy</MenuItem>
          <MenuItem value='Young'>Young</MenuItem>
          <MenuItem value='Adult'>Adult</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120,color:"rgb(234, 208, 240)" }}>
        <InputLabel id="demo-simple-select-standard-label"  sx={{ color:"rgb(234, 208, 240)"}}>Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filtersearch.category}
          onChange={e => onChangeCategory(e)}
          label="Category"
          sx={{ color:"rgb(234, 208, 240)"}}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value='accessories'>Accessories</MenuItem>
          <MenuItem value='food'>Food</MenuItem>
          <MenuItem value='toys'>Toys</MenuItem>
        </Select>
      </FormControl>
      
     

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 ,color:"rgb(234, 208, 240)"}}>
        <InputLabel id="demo-simple-select-standard-label"  sx={{ color:"rgb(234, 208, 240)"}}>Pet</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filtersearch.genre}
          onChange={e => handlePet(e)}
          label="Category"
          sx={{ color:"rgb(234, 208, 240)"}}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value='cat'>Cat</MenuItem>
          <MenuItem value='dog'>Dog</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 ,color:"rgb(234, 208, 240)" }}>
        <InputLabel id="demo-simple-select-standard-label"  sx={{ color:"rgb(234, 208, 240)"}}>Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={order}
          onChange={e => handlePrice(e)}
          label="Category"
          sx={{ color:"rgb(234, 208, 240)"}}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value='higherPrice'>Higher Price</MenuItem>
          <MenuItem value='lowerPrice'>Lower Price</MenuItem>
        </Select>
      </FormControl>


          {/*<button className="allProducts-btn" onClick={e => chargeAllProducts(e)}>All Products</button>*/}

 
    </div >
  )
}

export default Filter_Sort;
