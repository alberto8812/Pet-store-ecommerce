import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import { postCustomerData } from '../../../../redux/actions';//update de los datos de usuarios
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0



//verificar warning
/*changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info */


const InputUserStatus = ({rowData,update,setupdate,}) => {
const [userInfo, setUserInfo] = useState('')//almacena la informacion del usuarios
const dispatch = useDispatch();
const {isAuthenticated,getAccessTokenSilently}=useAuth0()


const handleChangue =(e)=>{//registra todos los datos de la input 
  setUserInfo(()=>({...userInfo,[e.target.name]:e.target.value}))

}

const handleSubmit=(e)=>{
  e.preventDefault()
 
  const getToken=async()=>{//funcion para conseguir el token 

    //require el token
    const token= await getAccessTokenSilently()
    //realizamon un arreglo con los header
   const headers= {   
      headers:{
      authorization: `Bearer ${token}`
      },    
      }
   dispatch (postCustomerData(userInfo,headers))
    }
    getToken()
  
  //inicializa valores
  setUserInfo({city:'',id:'',firstName:'',email:'',userName:'',direction:'',enabled:''})

  setupdate(()=>update==='down'?'up':'down');//actualiza la pagina

}

useEffect(() => {
 setUserInfo({city:rowData.city,id:rowData.id,firstName:rowData.firstName,email:rowData.email,userName:rowData.userName,direction:rowData.direction,enabled:rowData.enabled})
// obtiene los datos de la columna 
}, [rowData])






  return (
    <Box
    component="form"//contenedor form para los inputs
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={(e)=>handleSubmit(e)}
  >
   

   <div>
        <TextField
           disabled//contiene informacion del id del usuario
          id="outlined-required"
          label="ID"
          defaultValue="ID"
          value={userInfo?.id??null}
        />
        <TextField
          disabled //nombre completo del usuario
          id="outlined-disabled"
          label="Name"
          defaultValue="Hello World"
          value={userInfo?.firstName??null}
        />
        <TextField
          required//nickname
          id="outlined-password-input"
          label="userName"
          defaultValue="Hello World"
          name='userName'
          value={userInfo?.userName??null}
          onChange={(e)=>handleChangue(e)}
        />
        <TextField
         //direccion del uausario
          id="outlined-password-input"
          label="Direction"
          defaultValue="Direction"
          name='direction'
          value={userInfo?.direction??null}
          onChange={(e)=>handleChangue(e)}
        />
       <TextField
        //informacion de la ciudad
          id="outlined-password-input"
          label="City"
          defaultValue="City"
          name='city'
          value={userInfo?.city??null}
          onChange={(e)=>handleChangue(e)}
        />
        <TextField
          required //informacion del email
          id="outlined-password-input"
          label="email"
          defaultValue="Email"
          name='email'
          value={userInfo?.email??null}
          onChange={(e)=>handleChangue(e)}
        />


      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select //selector para el bloqueo 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="status"
          name='enabled'
          label="Enabled"
          value={userInfo?.enabled??''}
        
          onChange={(e)=>handleChangue(e)}
        >
    
          <MenuItem value={true}>TRUE</MenuItem>
          <MenuItem value={false}>FALSE</MenuItem>
        
        </Select>
      </FormControl>
  
     {(userInfo.enabled!==undefined )&& <Button variant="contained" endIcon={<SendIcon />} type='submit' sx={{ m: 1, minWidth: 100 }}>
        Send
      </Button>}
      
      </div>
   
   
  </Box>
  )
}

export default InputUserStatus