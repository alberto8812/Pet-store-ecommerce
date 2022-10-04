// componenten de Carga
import React from 'react'
import loading from './loading.gif';
import './Loading.css';


export default function Loading() {
    return (
          <div className="loading-container">
            <img className="loading-img" src={loading} alt="" />
          </div>
    )}
///
    //FALTA BUSCAR AL IMAGEN DE CARGA QUE QUEREMOS USAR