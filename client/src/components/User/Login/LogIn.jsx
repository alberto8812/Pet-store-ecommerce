import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, } from '@material-ui/core'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from '@auth0/auth0-react';//peticion  libreria auth0 para registros de usuario

import './Login.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            {/*<p>No estas registrado?</p>*/}
            <Button onClick={handleOpen}>Registrate!</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                <h2 id="parent-modal-title">Sing in</h2>
                    <TextField label='Full name' type='text' className={style.textfield} />
                    <br />
                    <TextField label='User name' type='text' className={style.textfield} />
                    <br />
                    <TextField label='Email' type='email' className={style.textfield} />
                    <br />
                    <TextField label='Passwork' type='password' className={style.textfield} />
                    <br />
                    <TextField label='Confirm Password' type='password' className={style.textfield} />
                    <br /><br />
                    <Button>Sing in</Button>
                    <Button onClick={() => handleClose()}>Cancel</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function LogIn() {
    const {loginWithRedirect,logout}=useAuth0()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            
            <IconButton onClick={handleOpen}>
                <AccountCircleIcon/>
                </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <div><h2 id="parent-modal-title">Log in</h2></div>
                    <button onClick={()=>loginWithRedirect()}>{/*crear boton para el login */}
                   {/* <IconButton onClick="{}" display='flex'>*/}
                    <LoginIcon/>
                    {/*</IconButton>*/}
                    </button>
                    <p>Login</p>
                    <br />
                    <button onClick={()=>logout()}>{/*crear boton para el logout */}
                    {/*<IconButton onClick="{}">*/}
                    <LogoutIcon/>
                    {/* </IconButton> */}
                    </button>
                    <p>Logout</p>
                    <br /><br />
                    <div align='right'>
                        {/*<Button onClick={() => handleClose()}>Cancel</Button>*/}
                        <ChildModal />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
