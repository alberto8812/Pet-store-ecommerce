import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const CardStatus = ({status, statusCount}) => {
  return (
    <Card sx={{ minWidth: 100,display:'flex',alignContent:'center',justifyContent:'center' }}>
    <CardContent>
      <Typography sx={{ fontSize: 17,display:'flex',alignContent:'center',justifyContent:'center' }} color="text.secondary" gutterBottom>
       {status}
      </Typography>
      <Typography variant="h3" component="div" sx={{ display:'flex',alignContent:'center',justifyContent:'center' }} color={status==='PENDING'?'rgba(255, 99, 132, 1)':'rgba(54, 162, 235, 1)'}>
        {statusCount}
      </Typography>
     
    </CardContent>
  
  </Card>
  )
}

export default CardStatus