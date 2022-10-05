import React,{useEffect} from 'react'
import LineChart from '../graphics/LineSale'
import { Avatar,Grid,Box } from '@mui/material';
import PieCategory from '../graphics/PieCategory';
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getgraphicsData } from '../../../redux/actions';

////

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
    <Grid container spacing={3}>
      <Grid item xs={8}
      sx={{
        maxwidth: '100%',
        height: '100%',
        backgroundColor:'#4917df44'
      }}
      >
         <Box
          sx={{
           maxwidth: '100vh',
           height: '100%',
           minWidth:'50vh',      
             backgroundColor:'#f234' }}   
             >
             <LineChart/>
          </Box>
      </Grid>
   
    <Grid item xs={3} sx={{
           maxwidth: '50vh',
           height: '100%',
           minWidth:'50vh'}}  >
             <Box
      sx={{
        width: '30vh',
           height: '100%',
           minWidth:'30vh',      
             backgroundColor:'#f234' }}       
 
      >
      <PieCategory/>
     </Box>
     <Box
      sx={{
        width: '30vh',
           height: '100%',
           minWidth:'10vh',      
             backgroundColor:'#f234' }}       
 
      >
      <PieCategory/>
     </Box>
     <Box
      sx={{
        width: '30vh',
           height: '100%',
           minWidth:'10vh',      
             backgroundColor:'#f234' }}       
 
      >
      <PieCategory/>
     </Box>
     </Grid> 
    </Grid>
  )
}

export default estadisticas