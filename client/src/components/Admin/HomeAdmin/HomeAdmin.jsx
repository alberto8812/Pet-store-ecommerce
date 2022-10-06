import React,{useEffect} from 'react'
import { Grid,Box} from '@mui/material';
import CardUser from './component/CardUser';
import CardTotalProducts from './component/CardTotalProducts';
import CardSaleDay from './component/CardSaleDay';
import CardDelivery from './component/CardDelivery';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getgraphicsData } from '../../../redux/actions';


const HomeAdmin = () => {
  const dispatch = useDispatch();
  const {getAccessTokenSilently}=useAuth0()//componete de hook auth0
  const statusGraphicsdb = useSelector(state =>state.statistics)
  
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
    Object.keys(statusGraphicsdb).length>0 ? <Box sx={{ height: '80%', width: '100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Box sx={{height: '0%', width: '0%',backgroundColor:'rgb(233, 211, 238)'}}>
        
      </Box>
    <Box sx={{ height: '80%', width: '100%',display:'flex',justifyContent:'center',alignItems:'center',}}>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 ,}} sx={{ height: '100%', width: '100%',padding:'70px',alignContent:'center',justifyContent:'center',gap:"60px"}}
  >
    <Grid item xs={4.8} >
     <CardUser logUser={statusGraphicsdb.statisticsStatusUserpie}/>
    </Grid>
    <Grid item xs={4.8}>
    <CardTotalProducts logUser={statusGraphicsdb.productsCounttotal}/>
    </Grid>
    <Grid item xs={4.8}>
    <CardSaleDay logUser={statusGraphicsdb.statisticsProduct}/>
    </Grid>
    <Grid item xs={4.8}>
    <CardDelivery logUser={statusGraphicsdb.statisticsStatusProductpie}/>
    </Grid>
  </Grid>
  </Box>
  </Box>:<h1>.......</h1>
  )
}

export default HomeAdmin