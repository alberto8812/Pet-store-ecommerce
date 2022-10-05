//Formulario para que el propietario de la pagina pueda cargar sus productos y modificar stock
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { postProduct } from "../../../redux/actions";
//import './Create.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Row';

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

    if(!input.genre) {
        errors.genre = "Product genre is required"
    }

    if(!input.category) {
        errors.category = "Product category is required"
    }

    if(!input.age) {
        errors.age = "Age is required"
    }

    // if (!input.race) {
    //     errors.race = "Race is required"
    // } else if (input.race.length > 50) {
    //     errors.race = "Race name must not exceed 50 characters"
    // }

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
    } else if (input.rating <= 0 || input.rating > 5) {
        errors.rating = 'The value must be a number between 1 and 5'
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
        // race: '',
        stock: '',
        detail: '',
        image: '',
        rating: 0,
        category: '',
        genre: '',
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
        const {name,value} = e.target
        console.log({name,value})
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }))
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
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.price && input.genre && input.category && input.age && input.stock && input.detail && input.rating && input.image /*&& input.category.length && input.genre.length*/) {

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
                // race: '',
                stock: '',
                detail: '',
                image: '',
                rating: 0,
                category: '',
                genre: '',
            })
            // navigate('/')
        } else {
            alert('There is incomplete data')
        }
    }

    return (
        <Container>
            
            <br />
            <div className="supercontainer">
            <h1>
                <Badge  bg="primary">Add products to Developets</Badge>
            </h1>
            <br />
            <Container>
                <form onSubmit={e => handleSubmit(e)} className='form'>
                    <Row>
                    <Col sm={2}> <label><strong>Name: </strong></label></Col>
                    <Col sm={6}><input className='inputs' type="text" value={input.name} name='name' onChange={e => handleChange(e)} /> </Col>
                        {errors.name && (
                           <p className="errors">{errors.name}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}>  <label><strong>Price:$ </strong></label></Col>
                        <Col sm={6}>   <input className='inputs' type="text" value={input.price} name='price' onChange={e => handleChange(e)} /> </Col>
                        {errors.price && (
                          <p className="errors">{errors.price}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}>  <label><strong>Genre </strong></label></Col>
                        <Col sm={6}>  <div><select className='inputs' name="genre" onChange={e => {handleChange(e)}}>
                            <option disabled selected>Select a genre</option>
                            <option value='cat'>Cat</option>
                            <option value='dog'>Dog</option>
                        </select>
                        </div> </Col>
                        {errors.genre && (
                            <p className="errors">{errors.genre}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}>  <label><strong>Category </strong></label></Col>
                        <Col sm={6}>  <div><select className='inputs' name="category" onChange={e => {handleChange(e)}}>
                            <option disabled selected>Select a category</option>
                            <option value='accesories'>Accesories</option>
                            <option value='food'>Food</option>
                            <option value='toys'>Toys</option>
                        </select>
                        </div> </Col>
                        {errors.category && (
                            <p className="errors">{errors.category}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}> <label><strong>Age: </strong></label> </Col>
                        <Col sm={6}>  <div><select className='inputs' name="age" onChange={e => {handleChange(e)}}>
                            <option disabled selected>Select an age</option>
                            <option value='Puppy'>Puppy</option>
                            <option value='Young'>Young</option>
                            <option value='Adult'>Adult</option>
                        </select>
                        </div> </Col>
                        {errors.age && (
                                <p className="errors">{errors.age}</p>
                        )}
                    </Row>
                    <br />
                    {/* <Row>
                        <Col sm={2}>  <label><strong>Race: </strong></label> </Col>
                        <Col sm={6}>  <input type="text" value={input.race} name='race' onChange={e => handleChange(e)} /> </Col>
                        {errors.race && (
                            <p className="errors">{errors.race}</p>
                        )}
                    </Row>
                    <br /> */}
                    <Row>
                        <Col sm={2}> <label><strong>Stock: </strong></label></Col>
                        <Col sm={6}>   <input className='inputs' type="text" value={input.stock} name='stock' placeholder="units" onChange={e => handleChange(e)} />
                            {/* <label><strong> u.</strong></label> */}
                        </Col>
                        {errors.stock && (
                            <p className="errors">{errors.stock}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}><label><strong>Rating: </strong></label> </Col>
                        <Col sm={6}><input className='inputs' type="number" value={input.rating} name='rating' placeholder="STARS" onChange={e => handleChange(e)} />
                            {/* <label><strong> STARS </strong></label> */}
                        </Col>
                        {errors.rating && (
                            <p className="errors">{errors.rating}</p>
                        )}
                    </Row>
                    <br />

                    <Row>
                        <Col sm={2}><label><strong>Detail: </strong></label></Col>
                        <Col sm={6}><input className='inputs' type="text" value={input.detail} name='detail' onChange={e => handleChange(e)} /> </Col>
                        {errors.detail && (
                            <p className="errors">{errors.detail}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}><label><strong>Image: </strong></label></Col>
                        <Col sm={6}><input className='inputs' type="text" value={input.image} name='image' onChange={e => handleChange(e)} /></Col>
                        {errors.image && (
                            <p className="errors">{errors.image}</p>
                        )}
                    </Row>
                    <br />
                    {/*
                    
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
                    

 */} 

 {/*
        Si quieren dejar los botones siempre activos solo reemplacen la linea  327  x esto:
        <Col sm={4}><Button variant="primary" size="md" type="submit" disabled={false} ><strong>Create</strong></Button> </Col>
        y listo
 */}
                    <Stack gap={2} className="col-md-15-mx-auto"><Col sm={2}></Col>
                    <Col sm={4}> {Object.values(errors).join('') == false ? <Button variant="primary" size="md" type="submit" disabled={false}  className='btnCreate'><strong>Create</strong></Button> : <Button variant="dark" size="md" type="submit" disabled={true} className='btnCreate'><strong>Create</strong></Button>} </Col>

                    <Col >   <Link to="/home"><Button variant="danger" size="md" active className='btnCreate'>Cancel</Button></Link> </Col>
                    </Stack>
                </form>
            </Container>
            <br />
            </div>
        </Container>
    )
}
