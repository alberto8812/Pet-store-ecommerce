import React,{useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './SidebarAdmin.css'
import * as FaIcons from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getRollAdmin } from '../../../redux/actions';


const SidebarAdmin = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0

  useEffect(() => {
    const getToken=async()=>{
      //pedimisn el token
      const token= await getAccessTokenSilently()
      //realizamon un arreglo con los header
      const headers= {   
        headers:{
        authorization: `Bearer ${token}`
        },    
        }
      dispatch(getRollAdmin(headers))
    }

    getToken()

  }, [])

  return (
    <div className='sidebar-admin'>
        <div className='sidebar-admin-rute'>
          <ul>
            <li>
              <NavLink to="logs" ><FaIcons.FaHome/> Home de Admin</NavLink>          
            </li>
            <li>
              <Link to="statistics"><FaIcons.FaChartBar/> Statistics </Link>          
            </li>
            <li>
              <Link to="users"><FaIcons.FaUsers/> Users</Link>          
            </li>
            <li>
              <Link to="productsAdm"> <FaIcons.FaBone/> Products</Link>          
            </li>
            <li>
              <Link to="create"> + Add Product</Link>          
            </li>
          </ul>
        </div>
        <div div className='sidebar-admin-componete'>
          <Outlet/>
        </div>
    </div>
  )
}

export default SidebarAdmin