import React, { useState } from 'react';
/* */
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { postInfo } from '../../../redux/actions';


export default function ModalDireccionPri() {
    const [show, setShow] = useState(false);
const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({
        direction:'',
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })}
        function handleSubmit(e) {
            e.preventDefault()
            console.log(input)
            dispatch(postInfo(input))
            setInput({
                direction:'',
                }
            )
            }
 

    return (
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa" variant="primary" onClick={handleShow}>
                <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                    fill="#3483fa" ></path>
            </svg>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Address</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div>
                        <form onSubmit={e => handleSubmit(e)}>
                            <div>
                                <label>holaaa</label>
                            </div>
                            <br />
                            <div>
                                <input type="text" name='direction' value={input.direction} onChange={e => handleChange(e)}/>
                            </div>
                            <br />
                            <div>
                                <button>buton</button>
                            </div>
                        </form>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
