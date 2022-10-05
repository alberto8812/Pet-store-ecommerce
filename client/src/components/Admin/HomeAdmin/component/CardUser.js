import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import PieUser from "../../graphics/PieUsers";
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const CardUser = ({logUser=[]}) => {
    let totalUser=0
    let date=new Date()
 
    console.log( String(date.getDate()).padStart(2, '0'))
   let logUser2=logUser.length?logUser.map(res=>totalUser+=parseInt(res.status_blocK)):[];

  return (
    <Card sx={{ minWidth: 165,maxWidth:350 }}>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" >
      <PeopleIcon sx={{ minWidth: 55,height:40}}/>Users
      </Typography>
     
      <Typography  component="div" sx={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(30px,150px))',gridAutoRows: '1fr',alignItems:'center',alignContent:'center',justifyItems:'center'}} >
      <Typography  component="div" sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}} >
        <h4>Register</h4> 
        <h2>{totalUser}</h2> 
      </Typography>
      <Typography  component="div"   sx={{height: '100px',width:'50px',minWidth:'70px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}} ><PieUser statusUserGraphics={logUser}/></Typography>
      </Typography>
    
    
    </CardContent>
  
  </Card>
);
}

export default CardUser