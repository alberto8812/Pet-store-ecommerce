import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './SidebarAdmin.css'
import * as FaIcons from 'react-icons/fa'

const SidebarAdmin = () => {
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
              <Link to="adminusers"><FaIcons.FaUsers/> Users</Link>          
            </li>
            <li>
              <Link to="productsAdm"> <FaIcons.FaBone/> Products</Link>          
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