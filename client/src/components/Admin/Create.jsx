//Formulario Para que el propietarios de la pagina pueda cargar sus productos y modificar stock
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { postProduct } from "../../redux/actions";

function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = 'Ingresar nombre para el producto'
    } else if (!input.name.length > 50) {
        errors.name = 'El nombre no debe superar los 50 caracteres'
    }

    if (!input.price) {
        errors.price = 'Ingresar precio para el producto'
    } else if (isNaN(parseInt(input.price))) {
        errors.price = 'Ingresa solo valores numéricos'
    } else if (input.price <= 0) {
        errors.price = 'el valor debe ser superior a 0'
    }

    if (!input.stock) {
        errors.stock = 'Ingresar stock para el producto'
    } else if (isNaN(parseInt(input.stock))) {
        errors.stock = 'Ingresa solo valores numéricos'
    } else if (input.stock < -1) {
        errors.stock = 'el stock debe ser 0 o superior'
    }

    if (!input.detail) {
        errors.name = 'Ingresar detalles para el producto'
    } else if (!input.detail.length > 300) {
        errors.name = 'El nombre no debe superar los 300 caracteres'
    }

    if (!input.rating) {
        errors.rating = 'Ingresar rating para el producto'
    } else if (isNaN(parseInt(input.rating))) {
        errors.rating = 'Ingresa solo valores numéricos'
    } else if (input.rating <= 0) {
        errors.rating = 'el valor debe ser superior a 0'
    }

    if (!input.image) {
        errors.image = 'Ingresar imagen para el producto'
    }
    return errors
}

export default function Create() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // allCategorys = useSelector((state) => state.categorys)
    // allGenres = useSelector((state) => state.genres)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        price: '',
        stock: '',
        detail: '',
        image: '',
        rating: '',
        category: [],
        genre: [],
    })

    /*
    useEffect(()=>{
        dispatch(getCategory())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getGenre())
    }, [dispatch])
    */

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }))
        console.log(input)
    }
    /*
        function handleSelectCategory(e) {
            if (!input.category.includes(e.target.value)) {
                setInput({
                    ...input,
                    category: [...input.category, e.target.value]
                })
                console.log(input)
            }
        }
    
        function handleSelectGenre(e) {
            if (!input.genre.includes(e.target.value)) {
                setInput({
                    ...input,
                    genre: [...input.genre, e.target.value]
                })
                console.log(input)
            }
        }
    
    
    function handleDeleteCategory(e) {
        setInput({
            ...input,
            category: input.category.filter(cate => cate !== e)
        })
    }
    
    function handleDeleteGenre(e) {
        setInput({
            ...input,
            genre: input.genre.filter(gen => gen !== e)
        })
    }

     name: '',
        price: '',
        stock: '',
        detail: '',
        image: '',
        rating: '',
        category: [],
        genre: [],
    */


    function handleSubmit(e) {
        e.preventDefault()
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.price && input.stock && input.detail && input.rating && input.image /*&& input.category.length && input.genre.length*/) {

            /*
            Si queremos poner una imagen por defecto cuando no se ingresa una 
            
            if (!input.image) {
                   input.image = ''
               }
               */

            dispatch(postProduct(input))
            alert('Se cargo un nuevo producto')
            setInput({
                name: '',
                price: '',
                stock: '',
                detail: '',
                image: '',
                rating: '',
                category: [],
                genre: [],
            })
            navigate('/')
        } else {
            alert('Faltan ingresar datos')
        }
    }

    return (
        <div>
            <h1 >Cargar Productos al Pet-Love</h1>
            <div >
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label><strong>Name: </strong></label>
                        <input type="text" value={input.name} name='name' onChange={e => handleChange(e)} />
                        {errors.name && (
                            <p>{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label><strong>Price: $ </strong></label>
                        <input type="text" value={input.price} name='price' onChange={e => handleChange(e)} />
                        {errors.price && (
                            <p>{errors.price}</p>
                        )}
                    </div>

                    <div>
                        <label><strong>Stock: </strong></label>
                        <input type="text" value={input.stock} name='stock' onChange={e => handleChange(e)} />
                        <label><strong> u.</strong></label>
                        {errors.stock && (
                            <p >{errors.stock}</p>
                        )}
                    </div>

                    <div>
                        <label><strong>Rating: </strong></label>
                        <input type="text" value={input.rating} name='rating' onChange={e => handleChange(e)} />
                        <label><strong> ESTRELLAS.</strong></label>
                        {errors.rating && (
                            <p >{errors.rating}</p>
                        )}
                    </div>

                    <div>
                        <label><strong>Detail: </strong></label>
                        <input type="text" value={input.detail} name='detail' onChange={e => handleChange(e)} />
                        {errors.detail && (
                            <p >{errors.detail}</p>
                        )}
                    </div>
                    <div>
                        <label><strong>Image: </strong></label>
                        <input type="text" value={input.image} name='image' onChange={e => handleChange(e)} />
                        {errors.image && (
                            <p >{errors.image}</p>
                        )}
                    </div>
                    {/*
                    <div>
                        <select onChange={e => handleSelectCategory(e)}>
                            <option value='selected' hidden >Category:</option>
                            {allCategorys?.sort(function (a, b) {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1
                                return 0
                            }).map(cate => {
                                return (
                                    <option value={cate.name} key={cate.id}>{cate.name}</option>
                                )
                            })}
                        </select>
                        {input.category.map(e => {
                            return (
                                <ul key={e}>
                                    <li>
                                        <p><strong>{e}</strong></p>
                                        <button onClick={() => handleDeleteCategory(e)}>X</button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                   
                    <div>
                        <select onChange={e => handleSelectGenre(e)}>
                            <option value='selected' hidden >Genres:</option>
                            {allGenres?.sort(function (a, b) {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1
                                return 0
                            }).map(gen => {
                                return (
                                    <option value={gen.name} key={gen.id}>{gen.name}</option>
                                )
                            })}
                        </select>
                        {input.genres.map(e => {
                            return (
                                <ul key={e}>
                                    <li>
                                        <p><strong>{e}</strong></p>
                                        <button onClick={() => handleDeleteGenre(e)}>X</button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

 */}
                    <button type="submit"><strong>Crear</strong></button>

                </form>
            </div>
        </div>

    )

}
