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
///
const InputsChangueState = ({rowInf,headers,setRender,render}) => {
  const dispatch = useDispatch();
    console.log(rowInf.firstName)
    const [status, setStatus] = useState('');

  const handleChange = (event) => {
   
    setStatus(event.target.value);
  };


 const handleSubmitSend=()=>{
  dispatch(putCustomerShoppingStatus(headers,status,rowInf.invoice))
  setRender(()=>render===''?'_':'')
  setStatus('')

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
                defaultValue="Usuario"
                value={rowInf.firstName}
                InputProps={{
                readOnly: true,
                }}
                />
                    <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Emial"
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