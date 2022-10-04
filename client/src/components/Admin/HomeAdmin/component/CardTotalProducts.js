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

const CardTotalProducts = () => {
  return (
    <Card sx={{ minWidth: 165,maxWidth:350 }}>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" >
      <InventoryIcon sx={{ minWidth: 55,height:40}}/>Users
      </Typography>
     
      <Typography  component="div" sx={{ display:'grid', gridTemplateColumns:' repeat(auto-fit,minmax(30px,150px))',gridAutoRows: '1fr',alignItems:'center',alignContent:'center',justifyItems:'center',backgroundColor:"#f24"}} >
      <Typography  component="div" sx={{backgroundColor:'#f45',display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center'}} >
        <h5>Total</h5> 
        <h2>varaible</h2> 
      </Typography>
      <Typography  component="div"   sx={{backgroundColor:'#f45', height: '100px',width:'50px',minWidth:'70px',display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}} ><PetsIcon sx={{ minWidth: 55,height:40}}/></Typography>
      </Typography>
    
    
    </CardContent>
  
  </Card>
  )
}

export default CardTotalProducts