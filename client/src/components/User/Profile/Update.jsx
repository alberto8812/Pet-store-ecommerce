import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { editProducts, getDetails, postInfo } from "../../../redux/actions";
import './Update.css'
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

    if (!input.direction) {
        errors.direction = ' Please provide a valid adress.'
    } else if (input.direction.length > 50) {
        errors.direction = 'The name must not exceed 50 characters'
    }

    if (!input.city) {
        errors.city = 'Please provide a valid city.'
    } else if (input.city.length > 50) {
        errors.city = 'The name must not exceed 50 characters'
    }
    return errors
}

export default function Update() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id}= useParams();
    const [errors, setErrors] = useState({})
    const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0
    const [input, setInput] = useState({
        direction: '',
        city: '',
        
    })

   
    useEffect(()=>{
      dispatch(postInfo())
    }, [dispatch])

    useEffect(()=>{
      
      setInput({
        direction:'',
        city: '',
        })
  }, [])

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

        if (!Object.getOwnPropertyNames(errors).length && input.direction && input.city ) {
            async  function editProf(){
                const token = await getAccessTokenSilently()
                const headers= {   
                  headers:{
                  authorization: `Bearer ${token}`
                  },    
                  }
                dispatch(postInfo(input, headers))
                alert('The data was edited')
                setInput({
                    direction:'',
                    city:'',
                })}
    
                editProf()
                
                // navigate('/')
            } else {
                alert('There is incomplete data')
            }
        }

        

    return (
        <Container>
        <div className="supercontainer">
            <h1 className="main-title">Update your information</h1>
        <Container>
            <form onSubmit={e => handleSubmit(e)} className='form'>
                <Row>
                {/* <Col sm={3}> <label><strong>Address: </strong></label></Col> */}
                <div class="row-md-6">
                    <label for="validationCustom03" class="form-label">Your adress</label>
                    <input value={input.direction} name='direction' onChange={e => handleChange(e)} type="text" class="form-control" id="validationCustom03" required/>
                    {errors.direction && (
                       <p className="errors">{errors.direction}</p>
                    )}
                    {/* <div class="invalid-feedback">
                    Please provide a valid adress.
                </div> */}
                </div>
                {/* <Col sm={5}><input className='inputs' type="text" value={input.direction} name='direction' onChange={e => handleChange(e)} /> </Col>
                    {errors.direction && (
                       <p className="errors">{errors.direction}</p>
                    )} */}
                </Row>
                {/* <br /> */}
                <Row>
                <div class="row-md-6">
                    <label for="validationCustom03" class="form-label">Your city</label>
                    <input value={input.city} name='city' onChange={e => handleChange(e)} type="text" class="form-control" id="validationCustom03" required/>
                    {errors.city && (
                      <p className="errors">{errors.city}</p>
                    )}
                    {/* <div class="invalid-feedback">
                    Please provide a valid city.
                </div> */}
                </div>
                    {/* <Col sm={3}>  <label><strong>City: </strong></label></Col>
                    <Col sm={5}>   <input className='inputs' type="text" value={input.city} name='city' onChange={e => handleChange(e)} /> </Col>
                    {errors.city && (
                      <p className="errors">{errors.city}</p>
                    )} */}
                </Row>
                <br />
           
                <Stack className="col-md-5-mx-auto"><Col sm={4}></Col>
                <Col sm={2}> {Object.values(errors).join('') == false ? <Button type="submit" disabled={false}  className='btn-back'><strong>Create</strong></Button> : <Button variant="dark" type="submit" disabled={true} className='btn-back'><strong>Create</strong></Button>} </Col>
                {/* <Col >   <Link to="/home"><Button variant="danger" size="md" active className='btnCreate'>Cancel</Button></Link> </Col> */}
                <Col ><Link to="/profile/:email"><Button className='btn-back'>Back</Button></Link> </Col>
                </Stack>
            </form>
        </Container>
        <br />
        </div>
    </Container>

        )
    }
