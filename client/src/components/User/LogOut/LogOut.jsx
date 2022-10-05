//Componente o Modal para cerrar secion/////
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from '@auth0/auth0-react';//peticion  libreria auth0 para registros de usuario
import { Link } from 'react-router-dom';
import './LogOut.css'


export default function LogOut() {
    const { logout } = useAuth0()

    function handleLogout() {
        window.localStorage.clear();
        logout();
    }
    return (
        <div>
            <Link className='logOut-btn' onClick={() => handleLogout()}>Logout</Link>
        </div>
    )
}