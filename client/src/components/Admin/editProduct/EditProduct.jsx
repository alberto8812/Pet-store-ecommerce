//Formulario para que el propietario de la pagina pueda cargar sus productos y modificar stock
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { editProducts, getDetails } from "../../../redux/actions";
import './EditProduct.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0

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

export default function Edit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id}= useParams();
    const {details} = useSelector(state => state)
    const [errors, setErrors] = useState({})
    const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0
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

   
    useEffect(()=>{
      id && dispatch(getDetails(id))
    }, [id])

    useEffect(()=>{
      if (details.name){const { name,
      price,
      age,
      stock,
      detail,
      image,
      rating,
      category,
      genre} = details
      setInput({name,
        price,
        age,
        stock,
        detail,
        image,
        rating,
        category: category.name,
        genre: genre.name})}
  }, [details])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }))
    }
  

  function handleSubmit(e) {
        e.preventDefault()
        console.log('holiiiiiasyich')
        if (!Object.getOwnPropertyNames(errors).length && input.name && input.price && input.genre && input.category && input.age && input.stock && input.detail && input.rating && input.image /*&& input.category.length && input.genre.length*/) {
          async  function editPP(){
            const token = await getAccessTokenSilently()
            const headers= {   
              headers:{
              authorization: `Bearer ${token}`
              },    
              }
            console.log('2222holii')
            dispatch(editProducts(id, headers, input))
            alert('The product was edited')
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
            })}

            editPP()
            
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
                <form onSubmit={e => handleSubmit(e)}>
                    <Row>
                    <Col sm={2}> <label><strong>Name: </strong></label></Col>
                    <Col sm={6}><input type="text" value={input.name} name='name' onChange={e => handleChange(e)} /> </Col>
                        {errors.name && (
                           <p className="errors">{errors.name}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}>  <label><strong>Price: $ </strong></label></Col>
                        <Col sm={6}>   <input type="text" value={input.price} name='price' onChange={e => handleChange(e)} /> </Col>
                        {errors.price && (
                          <p className="errors">{errors.price}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}>  <label><strong>Genre </strong></label></Col>
                        <Col sm={6}>  <div><select name="genre" onChange={e => {handleChange(e)}}>
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
                        <Col sm={6}>  <div><select name="category" onChange={e => {handleChange(e)}}>
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
                        <Col sm={6}>  <div><select name="age" onChange={e => {handleChange(e)}}>
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
                        <Col sm={6}>   <input type="text" value={input.stock} name='stock' placeholder="units" onChange={e => handleChange(e)} />
                            <label><strong> u.</strong></label></Col>
                        {errors.stock && (
                            <p className="errors">{errors.stock}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}><label><strong>Rating: </strong></label> </Col>
                        <Col sm={6}><input type="number" value={input.rating} name='rating' placeholder="STARS" onChange={e => handleChange(e)} />
                            <label><strong> STARS </strong></label></Col>
                        {errors.rating && (
                            <p className="errors">{errors.rating}</p>
                        )}
                    </Row>
                    <br />

                    <Row>
                        <Col sm={2}><label><strong>Detail: </strong></label></Col>
                        <Col sm={6}><input type="text" value={input.detail} name='detail' onChange={e => handleChange(e)} /> </Col>
                        {errors.detail && (
                            <p className="errors">{errors.detail}</p>
                        )}
                    </Row>
                    <br />
                    <Row>
                        <Col sm={2}><label><strong>Image: </strong></label></Col>
                        <Col sm={6}><input type="text" value={input.image} name='image' onChange={e => handleChange(e)} /></Col>
                        {errors.image && (
                            <p className="errors">{errors.image}</p>
                        )}
                    </Row>
                    <br />
                    
 {/*
        Si quieren dejar los botones siempre activos solo reemplacen la linea  327  x esto:
        <Col sm={4}><Button variant="primary" size="md" type="submit" disabled={false} ><strong>Create</strong></Button> </Col>
        y listo
 */}
                    <Stack gap={2} className="col-md-15-mx-auto"><Col sm={2}></Col>
                    <Col sm={4}> {Object.values(errors).join('') == false ? <Button variant="primary" size="md" type="submit" disabled={false} ><strong>Edit</strong></Button> : <Button variant="dark" size="md" type="submit" disabled={true} ><strong>Edit </strong></Button>} </Col>

                    <Col >   <Link to="/home"><Button variant="danger" size="md" active>Cancel</Button></Link> </Col>
                    </Stack>
                </form>
            </Container>
            <br />
            </div>
        </Container>
    )
}
