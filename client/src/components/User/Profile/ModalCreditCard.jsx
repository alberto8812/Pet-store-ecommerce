import React, { useState } from 'react';
/* */
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function ModalCreditCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa" variant="primary" onClick={handleShow}>
                <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                    fill="#3483fa" ></path>
            </svg>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Credit Card</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
