import React,{useEffect} from 'react'
import LineChart from '../graphics/LineSale'
import { Avatar,Grid,Box } from '@mui/material';
import PieCategory from '../graphics/PieCategory';
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getgraphicsData } from '../../../redux/actions';



const estadisticas = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0

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
      dispatch(getgraphicsData(headers))
    }

    getToken()

  }, [])

  


  return (
    <Grid>
  
      <Box
      sx={{
        width: 500,
        height: 500,       
      }}   
      >
      <LineChart/>
     </Box>
     <Box
      sx={{
        width: 300,
        height: 600,       
      }}   
      >
      <PieCategory/>
     </Box>
    </Grid>
  )
}

export default estadisticas