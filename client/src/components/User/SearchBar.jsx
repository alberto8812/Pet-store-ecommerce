// componente barra de busqueda

import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import getName from '../../redux/actions/index'


export default function SearchBar() {
    const [state, setState] = useState('')
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (state.length > 1) {
            dispatch(getName(state))
            setState('')
        } else {
            alert(`I don't enter anything in the search`)
        }
    }
    return (
        <>
            <input
                type='text'
                placeholder="Insert product to search..."
                onChange={e => handleChange(e)}
                value={state}
                onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
            />
            <button
                type="submit"
                onClick={e => handleSubmit(e)}
            >
                <span>
                    <strong>Search!</strong>
                </span>
            </button>
        </>
    )
}


//falta funcion de autocompletar se requiere back



