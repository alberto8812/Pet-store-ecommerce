import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
const {DOMAIN,CLIENTID, AUDIENCE}=process.env
///midlewere para autenticar con Atuh0
const Auth0ProviderWithHistory =({children}) => {
    let navigate = useNavigate();

    //const domain=process.env.REACT_APP_AUTH_DOMAIN;
    //const clientid=process.env.REACT_APP_AUTH_CLIENT_ID;

    const onRedirectCallback=(appState)=>{

        ////redirecciona a la pagina que esta autenticado
        navigate(appState?.returnTo||window.location.pathname)
    }

  return (
   <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENTID}
    redirectUri={window.location.origin}
    audience= {AUDIENCE}
    onRedirectCallback={onRedirectCallback}
   >
        {children}
   </Auth0Provider>
     )
    }
    
    
    
    export default Auth0ProviderWithHistory