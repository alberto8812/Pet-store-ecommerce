import React from 'react'
import {Link} from 'react-router-dom'
import './SidebarAdmin.css'
import * as FaIcons from 'react-icons/fa'

const SidebarAdmin = () => {
  return (
    <div className='sidebar-admin'>
        <div>
          <ul>
            <li>
              <Link to="/logs/" ><FaIcons.FaHome/> Home de Admin</Link>          
            </li>
            <li>
              <Link to="/logs/statistics"><FaIcons.FaChartBar/> Statistics </Link>          
            </li>
            <li>
              <Link to="/logs/users"><FaIcons.FaUsers/> Users</Link>          
            </li>
            <li>
              <Link to="/logs/productsAdm"> <FaIcons.FaBone/> Products</Link>          
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SidebarAdmin