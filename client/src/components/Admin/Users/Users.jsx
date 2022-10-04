import  React,{useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid,Box } from '@mui/material';
import PieUsers from '../graphics/PieUsers';
import { useSelector } from "react-redux";
import { getCustomerData, getgraphicsData } from '../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { useDispatch } from "react-redux";
import clsx from 'clsx';//permite crear condicionales con la clases
import CardStatus from './../Buyers/component/CardStatus';
import InputUserStatus from './componet/InputUserStatus';

const columns = [
  { field: 'id', headerName: 'ID', width: 230 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'userName', headerName: 'UserName', width: 230 },
  { field: 'direction', headerName: 'Direction', width: 230 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'enabled', headerName: 'Enabled', width: 130,
  cellClassName: (params) => {
    if (params.value == null) {
      return '';
    }
    return clsx('super-app', {
      negative:params.value==true,
      positive: params.value==false,
    });
  },
    },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

];



const Users = () => {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState('');//almacena informacion de una celda de la tabla
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()
  const datosUsuario=useSelector(state=>state.userStatus)
  const statusUserGraphicsdb = useSelector(state => state.statistics.statisticsStatusUserpie);
  const statusUserGraphics=statusUserGraphicsdb!==undefined?statusUserGraphicsdb:[];
  const [update, setupdate] = useState('down')
  let rows=[];
 

  useEffect(() => {
    const getToken=async()=>{

      //pedimisn el token
      const token= await getAccessTokenSilently()
      console.log(token)
      //realizamon un arreglo con los header
     const headers= {   
        headers:{
        authorization: `Bearer ${token}`
        },    
        }
      //dispatch(getCustomerData)
      dispatch(getgraphicsData(headers))
      dispatch(getCustomerData(headers))
    }

    getToken()

  }, [update])

  if(datosUsuario.length){//identifica si hay informacion en la varible de usuarios
    for (const users of datosUsuario) {
      rows.push( { id: users.id,firstName: users.name, email: users.email, userName:users.userName,direction:users.direction,city:users.city,enabled:users.enabled })
    }
    
    }
    
  const handleRowInfo=(data)=>{
    setRowData(data) //guarda la informacion de la fila seleccionada 
  }
 

  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <Box sx={{ height: 'auto', width: '100%',border:'1px solid'}}> 

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          direction="row"
          justifyContent="center"
          alignItems="center">

   {statusUserGraphics.length>0 && statusUserGraphics.map((data,index)=>{
       return (//infomracion de los banner de cantidades 
        <Grid item  xs={4} key={index}> 
       
        <CardStatus status={data.enabled?'enabled':'block'} statusCount={data.status_blocK}/>
        
          </Grid>
       )})}
        <Grid item  xs={4} > 
        
        
       
         </Grid>
        <Grid item xs={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
      
            <Box sx={{ height: '100px',width:'100px',minWidth:'100px',display:'flex',justifyContent:'center'}}>
              <PieUsers statusUserGraphics={statusUserGraphics}
              //grafica de pie de usuarios bloqueados o activos
              />
            
            </Box>
        </Grid>

  </Grid>
  <Grid container  gap={2}  sx={{padding:'20px'}}>
     <InputUserStatus  rowData={rowData} update={update} setupdate={setupdate}
     //formulario para actualizar datos de usuarios
     />
     
  </Grid>

</Box>
    <Box sx={{ height: 500, width: '100%',

   '& .super-app.negative': {
    backgroundColor: 'rgb(54, 162, 235)',
    color: '#020202',
    fontWeight: '600',
  },
  '& .super-app.positive': {
    backgroundColor: '#d47483',
    color: '#000000',
    fontWeight: '600',
  },}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[1]}
        onRowClick={(e)=>handleRowInfo(e.row)}
       //implenetacion de la tabla
      />
      </Box>
      </Box>
  )
}

export default Users