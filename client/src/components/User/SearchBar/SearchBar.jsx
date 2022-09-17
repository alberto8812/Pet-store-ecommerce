import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { testFilters } from "../../../redux/actions";
import './SearchBar.css';


export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    
    useEffect(() => {
        dispatch(testFilters({ name, genre }));
      }, [dispatch]);    
  

    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(testFilters({name,genre}));
        setName('');
        setGenre('');
    };

    function handleEnter(e){
        if(e.key === 'Enter') handleSubmit(e);
    };

    
    return (
        <>
            <div class="input-group">
                <input 
                    className="input" 
                    type="text" 
                    value={name}
                    placeholder="Search..." 
                    onChange={e => handleChange(e)}
                    onKeyDown={e => handleEnter(e)} 
                    autocomplete="off"
                />
                <button class="button--submit" type="submit" onClick={e => handleSubmit(e)}>🔍</button>
            </div>
        </>
    )
}


//falta funcion de autocompletar se requiere back



