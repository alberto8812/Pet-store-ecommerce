//Formulario para que el propietario de la pagina pueda cargar sus productos y modificar stock
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { postProduct } from "../../../redux/actions";

function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = 'Product name is required'
    } else if (input.name.length > 50) {
        errors.name = 'The name must not exceed 50 characters'
    }

    if (!input.price) {
        errors.price = 'Product price is required'
    } else if (isNaN(parseInt(input.price))) {
        errors.price = 'Enter only numeric values'
    } else if (input.price <= 0) {
        errors.price = 'The value must be greater than 0'
    }

    if(!input.race) {
        errors.race = "Race is required"
    } else if (input.race.length > 50) {
        errors.race = "Race name must not exceed 50 characters"
    }

    if (!input.stock) {
        errors.stock = 'Product stock is required'
    } else if (isNaN(parseInt(input.stock))) {
        errors.stock = 'Enter only numeric values'
    } else if (input.stock < 0) {
        errors.stock = 'Stock must be 0 or greater'
    }

    if (!input.detail) {
        errors.detail = 'Product detail is required'
    } else if (input.detail.length > 300) {
        errors.detail = 'The name must not exceed 300 characters'
    }

    if (!input.rating) {
        errors.rating = 'Product rating is required'
    } else if (isNaN(parseInt(input.rating))) {
        errors.rating = 'Enter only numeric values'
    } else if (input.rating <= 0) {
        errors.rating = 'The value must be greater than 0'
    }

    if (!input.image) {
        errors.image = 'Product image is required'
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
        age: '',
        race: '',
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
        age: '',
        race: '',
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
            alert('The product was added')
            setInput({
                name: '',
                price: '',
                age: '',
                race: '',
                stock: '',
                detail: '',
                image: '',
                rating: '',
                category: [],
                genre: [],
            })
            navigate('/')
        } else {
            alert('There is incomplete data')
        }
    }

    return (
        <div>
            <h1>Add products to Pets Love</h1>
            <div>
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
                        <label><strong>Age: </strong></label>
                        <div><select name="age" onChange={e => handleChange(e)}>
                            <option disabled selected>Select an age</option>
                            <option value= 'Puppy'>Puppy</option>
                            <option value= 'Young'>Young</option>
                            <option value= 'Adult'>Adult</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label><strong>Race: </strong></label>
                        <input type="text" value={input.race} name='race' onChange={e => handleChange(e)} />
                        {errors.race && (
                            <p>{errors.race}</p>
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
                        <label><strong> STARS </strong></label>
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
                    <button type="submit"><strong>Create</strong></button>
                    <Link to="/home">
                        <button>Cancel</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
