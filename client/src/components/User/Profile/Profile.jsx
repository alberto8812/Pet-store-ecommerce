// URL para que el cliente pueda modificar su perfil

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import './Profile.css' 
import Formulario from './Formulario'
import FormularioDireccionMain from './Formulario'

/**/ 
export default function Profile() {
    const {user,isAuthenticated,getAccessTokenSilently}=useAuth0()



    return (
        <div className="app-wrapper">
            <div className="page-wrapper">
                <div className="page-wrapper__content">
                    <div className="main-container profile">
                        <h1 className="main-title">My Profile</h1>
                        <div className="section">
                            <div className="section__title">
                                <h2 className="subtitle">Datos de Cuenta</h2>
                            </div>
                            {/*<div className="section__help">
                                <div className="link">
                                    <button type="button" className="andes-button null  andes-button--small andes-button--transparent">
                                        <span className="andes-button__content">
                                            "Modificar Datos de Cuenta"
                                            ::after
                                        </span>
                                    </button>
                                </div>
    </div>*/}
                        </div>
                        <div className="andes-card andes-card--flat andes-card--default profile-card andes-card--padding-default">
                            <div className="field-value field-value--button">
                                <div className="field-value__group">
                                    <div className="field-value__field">
                                        <span>User:</span>
                                    </div>
                                    <div className="field-value__value">
                                        <span>Aca va el nombre del Usuario</span>
                                    </div>
                                </div>
                                <div className="field-value__action">

                                </div>
                            </div>
                            <div className="field-value field-value--button">
                                <div className="field-value__group">
                                    <div className="field-value__field ">
                                        <span>E-mail</span>
                                    </div>
                                    <div className="field-value__value"><span>ACA VA EL EMAIL</span></div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="section">
                            <div className="section__title">
                                <h2 className="subtitle">Datos Personales</h2>
                            </div>
                            {/*<div className="section__help">
                        <div className="link">
                            <button type="button" className="andes-button null  andes-button--small andes-button--transparent">
                                <span className="andes-button__content">"Modificar Datos Personales"</span>
                                </button>
                                </div>
                        
</div>*/}
                        </div>
                        <div className="andes-card andes-card--flat andes-card--default profile-card andes-card--padding-default">
                            <div className="field-value field-value--button"  role="button">
                                <div className="field-value__group">
                                    <div className="field-value__field ">
                                        <span>Direccion</span>
                                    </div>
                                    <div className="field-value__value">
                                        <span>Aca la direccion</span>
                                    </div>
                                </div>
                                <div className="field-value__action">
                                    <div className="chevron--icon">
                                    <FormularioDireccionMain> <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" 
                                            fill="#3483fa" ></path>
                                        </svg>
                                        </FormularioDireccionMain>

                                    </div>
                                </div>
                            </div>
                            <div className="field-value field-value--button" role="button">
                                <div className="field-value__group">
                                    <div className="field-value__field ">
                                        <span>Direccion alternativa (OPCIONAL)</span>
                                    </div>
                                    <div className="field-value__value">
                                        <span>Aca la direccion OPC</span>
                                    </div>
                                </div>
                                <div className="field-value__action">
                                    <div className="chevron--icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="#3483fa"></path>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="field-value field-value--button" role="button">
                                <div className="field-value__group">
                                    <div className="field-value__field ">
                                        <span>Credit Card</span>
                                    </div>
                                    <div className="field-value__value">
                                        <span>Aca los numeros</span>
                                    </div>
                                </div>
                                <div className="field-value__action">
                                    <div className="chevron--icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="#3483fa"></path>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="field-value field-value--button" role="button">
                                <div className="field-value__group">
                                    <div className="field-value__field ">
                                        <span>ALGO MAS?</span>
                                    </div>
                                    <div className="field-value__value">
                                        <span>ACA ALGO MAS</span>
                                    </div>
                                </div>
                                <div className="field-value__action">
                                    <div className="chevron--icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#3483fa">
                                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="#3483fa"></path>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div >
        </div >
               
    )
}