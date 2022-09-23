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
import { Avatar,Grid } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';



<Icon icon="bx:home" />

const NavBar = () => {
    const {user,isAuthenticated,getAccessTokenSilently}=useAuth0()
    const [update, setUpdate] = useState(' ');
    const [filtersearch, setfiltersearch] = useState({age:'',category:'',name:'',genre:''});

    const [currentPage, setCurrentPage] = useState(1);
    const allProducts = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();
    let request=[] 
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    function onChangeName(e) {
    /// cuando se genere un cambio del search
        dispatch(getProducts(filtersearch));//, filterCategory
        setCurrentPage(1);
      }
    

/////// envio de informacion datos de usuarios/////////////////pendiente por chequeo equipo
useEffect(() => {
    const callProtectAip=async()=>{
   
        if(isAuthenticated){
        try {
            const token= await getAccessTokenSilently()
      
           request= await axios.get('http://localhost:3001/loginUsers',
            {   
                headers:{
                authorization: `Bearer ${token}`
                },    
        })   
              
        } catch (error) {
            console.log(error.message)
        }   
    }
}
    callProtectAip()
}, [isAuthenticated])  


    const prueba=async()=>{
        const token= await getAccessTokenSilently()
           const userData= await axios.post('http://localhost:3001/loginUsers/datauser',{direction:"j1232",city:"medellin"},
            {   
                headers:{
                authorization: `Bearer ${token}`
                },    
        })
    }


    return (
        <Grid container xs={12} sx={{background:'#6200adc9'}} 

           direction="row"
           justifyContent="center"
          alignItems="center"
        >
          
           <Grid  
           xs={12}    
          
           container
           direction="row"
           justifyContent="center"
          alignItems="center"
           
           >
                <Grid  
                xs={1} 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >  
                    <Link to='/' className='nav-link' >
                        {/* <Icon className='ico_nav' icon="bx:home" width='30px' height='30px' /> */}
                        <img className='img-home-btn' src={home} alt=''/>
                        <h3 className='link_home'>Home</h3>
                    </Link>                
                </Grid>
                <Grid item xs={8} 
                 container
                 
                 direction="row"
                 justifyContent="center"
                 alignItems="center"
              
                >
                    {/* <SearchBar /> */}
                    <SearchBar setfiltersearch={setfiltersearch} onChangeName={onChangeName} filtersearch={filtersearch}></SearchBar>
                  
                </Grid>
                <Grid   
                xs={3} 
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                >
                <Grid
                 xs={2}
               container
               direction="row"
               justifyContent="center"
               alignItems="center"
                >
                <Link to='/carrito'  >
                        <Icon  icon="fa:shopping-cart" width='35px' height='35px' hAlign="left" color= "rgb(234, 208, 240)" />
                        {/* <h3 className='link_home'>shopping</h3> */}
                    </Link>
                </Grid>
                <Grid
                xs={2}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              
                >
                    <Link to='/'  >
                        <Icon  icon="ic:outline-favorite" width='35px' height='35px' alignItems="center" color= "rgb(234, 208, 240)" />
                        {/* <h3 className='link_home'>Favorite</h3> */}
                    </Link>
                </Grid>
                <Grid
                 xs={2}
                 container
                 direction="row"
                 justifyContent="center"
                alignItems="stretch"
               
                >
                    <LogIn  ></LogIn>
                </Grid>
              
                    {isAuthenticated && ( 
                <Grid 
                xs={4}
                 container
                 direction="row"
                 justifyContent="center"
                 alignItems="center"
                 color= "rgb(234, 208, 240)" 
                 >
                    <Avatar alt="Remy Sharp" src={user.picture} />
                    <h5>{user.given_name}</h5>

                    </Grid>)}
                </Grid>
                
                </Grid>
                <Grid
                 xs={12}
                 container
                 direction="row"
                 justifyContent="center"
                alignItems="center"
               
                >
                <Filter_Sort update={update} setUpdate={setUpdate} setCurrentPage={setCurrentPage} filtersearch={filtersearch} setfiltersearch={setfiltersearch} />
                </Grid>
                   
               
                    {/* enseñar datos de usuario*/}
               
                {/*<button onClick={prueba}>mis datos</button>*/}
            
      
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
        </Grid>

    );
}

export default NavBar;