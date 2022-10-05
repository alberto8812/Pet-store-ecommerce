import React from 'react'
import { Grid,Box} from '@mui/material';
import CardUser from './component/CardUser';
import CardTotalProducts from './component/CardTotalProducts';
import CardSaleDay from './component/CardSaleDay';
import CardDelivery from './component/CardDelivery';
import { useSelector } from "react-redux";


const HomeAdmin = () => {
  const statusGraphicsdb = useSelector(state =>state.statistics)
  
  return (
    <Box sx={{ height: '100%', width: '100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Box sx={{height: '100%', width: '100%',backgroundColor:'#6636a5'}}>
        
      </Box>
    <Box sx={{ height: '80%', width: '100%',display:'flex',justifyContent:'center',alignItems:'center',}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 ,}} sx={{ height: '100%', width: '100%',padding:'7px',alignContent:'center',justifyContent:'space-evenly',gap:"1px"}}
  >
    <Grid item xs={4} >
     <CardUser logUser={statusGraphicsdb.statisticsStatusUserpie}/>
    </Grid>
    <Grid item xs={4}>
    <CardTotalProducts logUser={statusGraphicsdb.productsCounttotal}/>
    </Grid>
    <Grid item xs={4}>
    <CardSaleDay logUser={statusGraphicsdb.statisticsProduct}/>
    </Grid>
    <Grid item xs={4}>
    <CardDelivery logUser={statusGraphicsdb.statisticsStatusProductpie}/>
    </Grid>
  </Grid>
  </Box>
  </Box>
  )
}

export default HomeAdmin