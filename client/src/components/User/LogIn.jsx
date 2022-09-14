//MODAL para iniciar secion
import React, { useState } from "react";
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid black',
        //boxShadow: theme.shadows[5],
        padding: "16px 32px 24px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    textfield: {
        width: '100%'
    }
}))

export default function LogIn() {
    const style = useStyles();

    const [modal, setModal] = useState(false)

    const abrirCerrarModal = () => {
        setModal(!modal)
    }

    const body = (
        <div className={style.modal}>
            <div align='center'>
                <h2>Login / Registration</h2>
            </div>
            <TextField label='Email' type='email' className={style.textfield} />
            <br />
            <TextField label='Passwork' type='password' className={style.textfield} />
            <br /><br />
            <div align='right'>
                <Button>Log In</Button>
                <Button onClick={() =>abrirCerrarModal()}>Cancel</Button>
            </div>
        </div>
    )

    return (
        <div>
            <Button onClick={() =>abrirCerrarModal()}>Abrir Modal Prueba</Button>
            <Modal
                open={modal}
                onclose={abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    )
}