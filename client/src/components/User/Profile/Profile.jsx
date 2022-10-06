// URL para que el cliente pueda modificar su perfil

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import './Profile.css'
import ModalDireccionPri from './ModalDireccionPri'
import ModalDireccionSec from './ModalDireccionSec'
import ModalParaOtraCosa from './ModalParaOtraCosa'
import ModalCreditCard from './ModalCreditCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDataProfile } from '../../../redux/actions'
import axios from 'axios'
import { Link } from 'react-router-dom'
useDispatch

export default function Profile() {
    const dispatch=useDispatch()
    const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()//componete de hook auth0
   const userData=useSelector(state=>state.userProfile)
   console.log(userData)

   

    useEffect(() => {
        async function editUser() {
            const token = await getAccessTokenSilently()
            const headers = {
                headers: {
                    authorization: `Bearer ${token}`
                },
            }
            dispatch(getDataProfile(headers))
        
        }
        editUser()
    },[])




    return (

        isAuthenticated ?
            isAuthenticated && (
                <div className="app-wrapper">
                    {console.log(isAuthenticated)}
                    <div className="page-wrapper">
                        <div className="page-wrapper__content">
                            <div className="main-container profile">
                                <h1 className="main-title">My Profile</h1>
                                <div className="section">
                                    <div className="section__title">
                                        <h2 className="subtitle">Account information</h2>
                                    </div>
                                </div>
                                <div className="andes-card andes-card--flat andes-card--default profile-card andes-card--padding-default">
                                    <div className="field-value field-value--button">
                                        <div className="field-value__group">
                                            <div className="field-value__field">
                                                <span>User:</span>
                                            </div>
                                            <div className="field-value__value">
                                                <span>{user.name}</span>
                                            </div>
                                        </div>
                                        <div className="field-value__action">

                                        </div>
                                    </div>
                                    <div className="field-value field-value--button">
                                        <div className="field-value__group">
                                            <div className="field-value__field ">
                                                <span>E-mail:</span>
                                            </div>
                                            <div className="field-value__value"><span>{user.email}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div className="section">
                                    <div className="section__title">
                                        <h2 className="subtitle">Personal data</h2>
                                    </div>
                                </div>
                                <div className="andes-card andes-card--flat andes-card--default profile-card andes-card--padding-default">
                                    <div className="field-value field-value--button" role="button">
                                        <div className="field-value__group">
                                            <div className="field-value__field ">
                                                <span>Adress</span>
                                            </div>
                                            <div className="field-value__value">
                                                <span>{userData.direction}</span>
                                            </div>
                                        </div>
                                        {/*<div className="field-value__action">
                                    <div className="chevron--icon">
                                        <ModalDireccionPri> <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                                                fill="#3483fa" ></path>
                                        </svg>
                                        </ModalDireccionPri>
                                    </div>
        </div>*/}
                                    </div>
                                    <div className="field-value field-value--button" role="button">
                                        <div className="field-value__group">
                                            <div className="field-value__field ">
                                                <span>City</span>
                                            </div>
                                            <div className="field-value__value">
                                                <span>{userData.city}</span>
                                            </div>
                                        </div>
                                        {/*<div className="field-value__action">
                                    <div className="chevron--icon">
                                        <ModalDireccionSec> <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                                                fill="#3483fa" ></path>
                                        </svg>
                                        </ModalDireccionSec>
                                    </div>
        </div>*/}
                                    </div>
                                    {/* <div className="field-value field-value--button" role="button">
                                        <div className="field-value__group">
                                            <div className="field-value__field ">
                                                <span>Credit Card</span>
                                            </div>
                                            <div className="field-value__value">
                                                <span>Aca los numeros</span>
                                            </div>
                                        </div> */}
                                        {/*<div className="field-value__action">
                                    <div className="chevron--icon">
                                        <ModalCreditCard> <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                                                fill="#3483fa" ></path>
                                        </svg>
                                        </ModalCreditCard>
                                    </div>
        </div>*/}
                                    {/* </div> */}
                                    {/* <div className="field-value field-value--button" role="button">
                                        <div className="field-value__group">
                                            <div className="field-value__field ">
                                                <span>ALGO MAS?</span>
                                            </div>
                                            <div className="field-value__value">
                                                <span>ACA ALGO MAS</span>
                                            </div>
                                        </div> */}
                                        {/*<div className="field-value__action">
                                    <div className="chevron--icon">
                                        <ModalParaOtraCosa> <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z"
                                                fill="#3483fa" ></path>
                                        </svg>
                                        </ModalParaOtraCosa>
                                    </div>
    </div>*/}
                                    {/* </div> */}
                                </div>
                                <div >
                                    <Link to='/profile/update'><button className='btn-update-data'>Update data</button></Link>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div >
                </div >
            ) :
            <></>
    )
}