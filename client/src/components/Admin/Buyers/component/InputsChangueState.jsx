import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useDispatch } from "react-redux";
import { putCustomerShoppingStatus } from '../../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
///
const InputsChangueState = ({rowInf,setRender,render}) => {
  const invoice=rowInf.invoice;
  const {getAccessTokenSilently}=useAuth0()
  const dispatch = useDispatch();

    const [status, setStatus] = useState('');

  const handleChange = (event) => {
   
    setStatus(event.target.value);
  };


 const handleSubmitSend=()=>{
  const getToken=async()=>{
    let headers={}
    //pedimisn el token
    const token= await getAccessTokenSilently()
 
    //realizamon un arreglo con los header
    headers= {   
      headers:{
      authorization: `Bearer ${token}`
      },    
      }
   //console.log(headers)
   

    dispatch(putCustomerShoppingStatus(headers,status,invoice))
    setRender(()=>render===''?'_':'')
    setStatus('')
   
  }

  getToken()
  

  rowInf=[]
  
 }

  return (
    <Grid container
    
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    >
   
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Users"
                value={rowInf.firstName}
                InputProps={{
                readOnly: true,
                }}
                />
                    <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Email"
                value={rowInf.email}
                InputProps={{
                readOnly: true,
                }}
                />
                    <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Invoice"
                value={rowInf.invoice}
                InputProps={{
                readOnly: true,
                }}
                />
        <Box sx={{ minWidth: '200px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="STATUS"
          onChange={handleChange}
        >
          <MenuItem value={'PENDING'}>PENDING</MenuItem>
          <MenuItem value={'COMPLETED'}>COMPLETED</MenuItem>
          <MenuItem value={'CANCELED'}>CANCELED</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" spacing={2}>
    </Stack>
    </Box>
    {/*envia informacion del estado del status nuevo  */}
    {status!=='' && <Button variant="contained" endIcon={<SendIcon />} onClick={()=>handleSubmitSend()}>
        Send
      </Button>}

            
  </Grid>
  )
}

export default InputsChangueState