import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovingIcon from '@mui/icons-material/Moving';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const CardSaleDay = ({logUser}) => {
    let totalUser=logUser.total[logUser.total.length-1]
 
  return (
    <Card sx={{ minWidth: 165,maxWidth:350 }}>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" >
      <MovingIcon sx={{ minWidth: 55,height:40}}/>Sales Day
      </Typography>
     
      <Typography  component="div" sx={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(30px,150px))',gridAutoRows: '1fr',alignItems:'center',alignContent:'center',justifyItems:'center'}} >
      <Typography  component="div" sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}} >
        <h4>Mount</h4> 
        <h5>${totalUser}</h5> 
      </Typography>
      <Typography  component="div"   sx={{height: '100px',width:'50px',minWidth:'70px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}><CreditScoreIcon sx={{ minWidth: 55,height:120}}/></Typography>
      </Typography>
    
    
    </CardContent>
  
  </Card>
  )
}

export default CardSaleDay