import  React,{useEffect} from 'react';
import { DataGrid, useGridSelector } from '@mui/x-data-grid';
import { Grid,Box } from '@mui/material';
import PieUsers from '../graphics/PieUsers';
import { useSelector } from "react-redux";
import { getCustomerData, getgraphicsData } from '../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { useDispatch } from "react-redux";
import CardStatus from './../Buyers/component/CardStatus';

const columns = [
  { field: 'id', headerName: 'ID', width: 230 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'userName', headerName: 'UserName', width: 230 },
  { field: 'direction', headerName: 'Direction', width: 230 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'blockUser', headerName: 'BlockUser', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

];



      //statusGraphics={statusGraphics}
const Users = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()
  const datosUsuario=useSelector(state=>state.userStatus)
  const statusUserGraphicsdb = useSelector(state => state.statistics.statisticsStatusUserpie);
  const statusUserGraphics=statusUserGraphicsdb!==undefined?statusUserGraphicsdb:[];
  let rows=[];
  console.log(datosUsuario)

  useEffect(() => {
    const getToken=async()=>{

      //pedimisn el token
      const token= await getAccessTokenSilently()
      //realizamon un arreglo con los header
     const headers= {   
        headers:{
        authorization: `Bearer ${token}`
        },    
        }
      //dispatch(getCustomerShopping(headers))
      dispatch(getgraphicsData(headers))
      dispatch(getCustomerData(headers))
    }

    getToken()

  }, [])

  if(datosUsuario.length){
    for (const users of datosUsuario) {
      rows.push( { id: users.id,firstName: users.name, email: users.email, userName:users.userName,direction:users.direction,city:users.city,blockUser:users.blockUser })
    }
    
    }
 
  
  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <Box sx={{ height: 'auto', width: '100%',border:'1px solid'}}> 

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          direction="row"
          justifyContent="center"
          alignItems="center">

   {statusUserGraphics.length>0 && statusUserGraphics.map((data,index)=>{
       return (
        <Grid item  xs={4} key={index}> 
       
        <CardStatus status={data.blockUser?'block':'available'} statusCount={data.status_blocK}/>
        
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
              <PieUsers statusUserGraphics={statusUserGraphics}/>
            
            </Box>
        </Grid>

  </Grid>
  <Grid container  gap={2}  sx={{padding:'20px'}}>
      {/*<InputsChangueState rowInf={rowInf} headers={headers} setRender={setRender} render={render}/>*/}
      <Box></Box>
  </Grid>

</Box>
    <Box sx={{ height: 500, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[1]}
       // checkboxSelection
      />
      </Box>
      </Box>
  )
}

export default Users