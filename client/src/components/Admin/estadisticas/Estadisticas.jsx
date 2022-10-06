import React,{useEffect} from 'react'
import LineChart from '../graphics/LineSale'
import { Avatar,Grid,Box } from '@mui/material';
import PieCategory from '../graphics/PieCategory';
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getgraphicsData } from '../../../redux/actions';
import PieStatus from '../graphics/PieStatus';
import PieUsers from '../graphics/PieUsers';
////

const estadisticas = () => {
  const dispatch = useDispatch();
  const {statisticsStatusProductpie,statisticsStatusUserpie} = useSelector(state => state.statistics);
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
    <Grid container spacing={3} sx={{gap:'5vh'}}>
      <Grid item xs={8}
      sx={{
        maxwidth: '100%',
        height: '100%',
        gap:'5px'
       
      }}
      >
         <Box
          sx={{
           maxwidth: '100vh',
           height: '100%',
           minWidth:'50vh', 
           

              }}   
             >
              <Box  sx={{
           maxwidth: '100vh',
           height: '15vh',
           minWidth:'50vh', 
           fontSize:'4rem',
            display:'flex',
            justifyContent:'center'
             }}   >
              <b>Daily sales</b>
              </Box>
              <Box>
             <LineChart/>
             </Box>
          </Box>
      </Grid>
   
    <Grid container item xs={3} sx={{
           maxwidth: '50vh',
           height: '100%',
           minWidth:'50vh',
           marginTop:'5rem',
           marginLeft:'2px',
          
           justifyContent:'center',
           justifyItems:'center',
           padding:'1vh'
          }}  
           
           >
             <Box
      sx={{
        width: '30vh',
           height: '100%',
           minWidth:'30vh',      
             }}       
 
      >
         <PieCategory/>

     </Box>
     <Box
      sx={{
        width: '30vh',
           height: '100%',
           minWidth:'30vh',      
              }}       
 
      >
        <PieStatus statusGraphics={statisticsStatusProductpie}/>
     </Box>

     </Grid> 
    </Grid>
  )
}

export default estadisticas