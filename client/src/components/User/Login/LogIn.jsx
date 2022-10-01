import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth0 } from '@auth0/auth0-react';//peticion  libreria auth0 para registros de usuario
import PetsIcon from '@mui/icons-material/Pets';
import { Icon } from '@iconify/react'
////////////


export default function LogIn() {
    const { loginWithRedirect } = useAuth0()



    return (
        <div>
            <button onClick={() => loginWithRedirect()}>{/*crear boton para el login */}
                {/* <IconButton onClick="{}" display='flex'>*/}
                <Icon  icon="ic:outline-login" width='35px' height='35px' alignItems="center" color="rgb(234, 208, 240)"/>
                {/*</IconButton>*/}
            </button>
            
        </div>
    );
}

