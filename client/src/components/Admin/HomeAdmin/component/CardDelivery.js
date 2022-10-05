import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovingIcon from '@mui/icons-material/Moving';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AllInboxIcon from '@mui/icons-material/AllInbox';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const CardDelivery = ({logUser}) => {
 console.log(logUser)
 let pending=logUser.find(res=>res.status==='PENDING')
 let completed=logUser.find(res=>res.status==='COMPLETED')
 completed=completed===undefined?{status_count:0}:completed
 pending=pending===undefined?{status_count:0}:pending

  return (
    <Card sx={{ minWidth: 165,maxWidth:350 }}>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" >
      <LocalShippingIcon sx={{ minWidth: 55,height:40}}/>Delivery
      </Typography>
     
      <Typography  component="div" sx={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(30px,150px))',gridAutoRows: '1fr',alignItems:'center',alignContent:'center',justifyItems:'center'}} >
      <Typography  component="div" sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}} >
       <Box sx={{color: 'rgb(255, 99, 132)',height: '100px',width:'50px',minWidth:'70px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
        <h4>Pending</h4> 
        <h4>{Object.keys(pending).length?pending.status_count:0}</h4>
       </Box>
      </Typography  >
        <Box  sx={{color: 'rgb(54, 162, 235)',height: '100px',width:'50px',minWidth:'70px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
         <h4>Completed</h4> 
        <h4>{Object.keys(completed).length?completed.status_count:0}</h4>
        </Box>
      </Typography>
    
    
    </CardContent>
    
  </Card>
  )
}

export default CardDelivery