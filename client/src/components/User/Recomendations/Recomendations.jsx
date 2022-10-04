import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProducts } from '../../../redux/actions';
import CardProduct from '../Card/Card';
import { Grid, Box } from "@mui/material";
import suggested from './suggested.json';
import { Link } from 'react-router-dom';
import "./Recomendamela.css";


export default function Recomendations() {

  const dispatch = useDispatch();
  const productsDos = useSelector(state => state.products);


  useEffect(() => {
    suggested.map(x => console.log(x))
  }, [])
  console.log('SOY LOS SUGGESTED', suggested)


  return (
    /*
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <p>But we also suggest!</p>
    
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    
      {suggested?.map(el => {
        return (
          
          <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={el.image} class="d-block w-50" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>{el.name}</h5>
            </div>
          </div>
        </div>
        )})}
        
    
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    */



    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <p>But we also suggest!</p>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={suggested[0].image} class="d-contents w-40" height='600px' alt={suggested[0].name} />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='h5'>{suggested[0].name}</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={suggested[1].image} class="d-contents w-40" height='600px' alt={suggested[1].name} />
          <div class="carousel-caption d-none d-md-block">
            <h5 className='h5'>{suggested[1].name}</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src={suggested[2].image} class="d-contents w-40" height='600px' alt={suggested[2].name} />
          <div class="carousel-caption d-none d-md-block">
            <br />
            <h5 className='h5'>{suggested[2].name}</h5>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>


  )
}
