import './NavbarAdmin.css'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
const NavbarAdmin = () =>{

  return (
    <Fragment>
    <div className="navbar-admin"> 
      <h1>Admin Developets</h1>
    </div>
    <div>
    <input 
    type="text" 
    placeholder="Search..."/>
    <button 
    type="submit" 
    > 🔍 </button>
    </div>
    </Fragment>
  )

}
/** */
export default NavbarAdmin