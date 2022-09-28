import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getCustomerShopping } from '../../../redux/actions';
import { useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0
  const custumerData = useSelector(state => state.customerShopping);

  console.log(custumerData)
  
  useEffect(() => {
    const getToken=async()=>{
      //pedimisn el token
      const token= await getAccessTokenSilently()
      //realizamon un arreglo con los header
      const headers= {   
        headers:{
        authorization: `Bearer ${token}`
        },    
        }
      dispatch(getCustomerShopping(headers))
    }

    getToken()

  }, [])




  return (
    <div>
      <h3>users</h3>
    </div>
  )
}

export default Users