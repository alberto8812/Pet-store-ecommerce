import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { testFilters } from "../../../redux/actions";
import { Avatar,Grid,Box } from '@mui/material';
import './SearchBar.css';

////////////
export default function SearchBar({onChangeName, setfiltersearch,filtersearch}) {
  
    function handleChange(e) {
        e.preventDefault()
        setfiltersearch({...filtersearch,name:e.target.value})
    };
    
    function handleSubmit(e) {
        //e.preventDefault();
        onChangeName(e)
    };

    function handleEnter(e){
        if(e.key === 'Enter') handleSubmit(e);
    };

    
    return (
   
            < Grid 
             xs={12} 
             container
             direction="columns"
             justifyContent="center"
             alignItems="center"
            
            >
             <Box
              sx={{
                display:'flex',
                width: '70%'
              }}
             
             
             >
                <input 
                    className="input" 
                    type="text" 
                    // value={name}
                    placeholder="Search..." 
                    onChange={e => handleChange(e)}
                    onKeyDown={e => handleEnter(e)} 
                    autocomplete="off"
                />
            
        
                <button className="button--submit" type="submit" onClick={e => handleSubmit(e)}>🔍</button>
                </Box>
            </Grid>
    
    )
}


//falta funcion de autocompletar se requiere back



