import React,{useEffect} from 'react'
import LineChart from '../graphics/LineSale'
import { Avatar,Grid,Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0



const estadisticas = () => {
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()

  useEffect(() => {
    const callProtectAip=async()=>{
   
        if(isAuthenticated){
        try {
            const token= await getAccessTokenSilently()
      
           request= await axios.get('http://localhost:3001/loginUsers',
            {   
                headers:{
                authorization: `Bearer ${token}`
                },    
        })   
              
        } catch (error) {
            console.log(error.message)
        }   
    }
}
    callProtectAip()
}, [isAuthenticated])  






  return (
    <Grid>
      <Box
       sx={{
        width: 300,
        height: 300,
        
      }}
      >
        <h1>Data admind</h1>
      </Box> 
      <Box
      sx={{
        width: 600,
        height: 600,
        
      }}
      
      >
      <LineChart/>
     </Box>
    </Grid>
  )
}

export default estadisticas