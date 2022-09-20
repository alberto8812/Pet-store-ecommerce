import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import { Icon } from '@iconify/react';
import LogIn from '../Login/LogIn';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import axios from "axios"
import Filter_Sort from '../Filters_Sort/Filters_Sort';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, sortByPrice } from '../../../redux/actions';
import home from './download.png';
<Icon icon="bx:home" />

const NavBar = () => {
    const {user,isAuthenticated,getAccessTokenSilently}=useAuth0()
    const [update, setUpdate] = useState(' ');
    const [currentPage, setCurrentPage] = useState(1);
    const allProducts = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])



/////// envio de informacion datos de usuarios/////////////////pendiente por chequeo equipo
useEffect(() => {
    const callProtectAip=async()=>{
        if(isAuthenticated){
        try {
            const token= await getAccessTokenSilently()
            console.log(token,"front")
            const request= await axios.get('http://localhost:3001/loginUsers',
            { headers:{
                authorization: `Bearer ${token}`
            }})
        
          
        } catch (error) {
            console.log(error.message)
        }   
    }
}
    callProtectAip()
}, [isAuthenticated])  


    return (
        <div>
            <div className='nav-body'>
                <div className='nav-header'>
                    <Link to='/' className='nav-link' >
                        {/* <Icon className='ico_nav' icon="bx:home" width='30px' height='30px' /> */}
                        <img className='img-home-btn' src={home} alt=''/>
                        <h3 className='link_home'>Home</h3>
                    </Link>
                </div>
                <div>
                    {/* <SearchBar /> */}
                    <Filter_Sort update={update} setUpdate={setUpdate} setCurrentPage={setCurrentPage} />
                </div>
                <div className='nav_box'>
                </div>
                <div className='nav_box'>
                    <Link to='/' className='nav-link' >
                        <Icon icon="fa:shopping-cart" width='30px' height='30px' />
                        <h3 className='link_home'>shopping</h3>
                    </Link>
                    <Link to='/' className='nav-link' >
                        <Icon icon="ic:outline-favorite" width='30px' height='30px' />
                        <h3 className='link_home'>Favorite</h3>
                    </Link>
                    <div>
                        <LogIn className='nav-link' >
                        </LogIn>
                    </div>
                    {/* enseñar datos de usuario*/}
                {isAuthenticated && (<div>
                   
                    <img src={user.picture}  />
                    <h5>{user.name}</h5>

                </div>)}
                </div>
            </div>
            {/* <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <div className='linkes'>
                            <Link className='nav-link' to='/'><h3>Home</h3></Link>
                        </div>
                    </ul>
                </div>
            </nav> */}
        </div>

    );
}

export default NavBar;