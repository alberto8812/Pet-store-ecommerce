import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

const InputsChangueState = ({rowInf}) => {
    const [status, setStatus] = useState('');
  console.log(rowInf)
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Grid container
    
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    >
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                value={rowInf.firstName}
                InputProps={{
                readOnly: true,
                }}
                />
                    <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                value={rowInf.email}
                InputProps={{
                readOnly: true,
                }}
                />
                    <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
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
    </Box>

            
  </Grid>
  )
}

export default InputsChangueState