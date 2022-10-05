import React from 'react'
import { Grid,Box} from '@mui/material';
import CardUser from './component/CardUser';
import CardTotalProducts from './component/CardTotalProducts';
import { useSelector } from "react-redux";

const HomeAdmin = () => {
  const statusGraphicsdb = useSelector(state =>state.statistics)
  console.log(statusGraphicsdb)
  return (
    <Box sx={{ height: '100%', width: '100%',backgroundColor:'#44b2c5'}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 ,}} sx={{ height: '100%', width: '50%',backgroundColor:'#44c544'}}>
    <Grid item xs={6}>
     <CardUser logUser={statusGraphicsdb.statisticsStatusUserpie}/>
    </Grid>
    <Grid item xs={6}>
    <CardTotalProducts logUser={statusGraphicsdb.productsCounttotal}/>
    </Grid>
    <Grid item xs={6}>
    <CardUser/>
    </Grid>
    <Grid item xs={6}>
    <CardUser/>
    </Grid>
  </Grid>
  </Box>
  )
}

export default HomeAdmin