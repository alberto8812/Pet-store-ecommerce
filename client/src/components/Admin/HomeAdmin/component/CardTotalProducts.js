import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import PieUser from "../../graphics/PieUsers";
import PetsIcon from '@mui/icons-material/Pets';
import InventoryIcon from '@mui/icons-material/Inventory';

const CardTotalProducts = ({logUser=[]}) => {
  console.log(logUser[0],"2")
  return (
    <Card sx={{ minWidth: 165,maxWidth:350 }}>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" >
      <InventoryIcon sx={{ minWidth: 55,height:40}}/>Products
      </Typography>
   
      <Typography  component="div" sx={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(30px,150px))',gridAutoRows: '1fr',alignItems:'center',alignContent:'center',justifyItems:'center'}} >
      <Typography  component="div" sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}} >
        <h4>Total</h4> 
        <h2>{logUser[0].status_product}</h2> 
      </Typography>
      <Typography  component="div"   sx={{ height: '100px',width:'50px',minWidth:'70px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}} ><PetsIcon sx={{ minWidth: 55,height:40}}/></Typography>
      </Typography>
    
    
    </CardContent>
  
  </Card>
  )
}

export default CardTotalProducts