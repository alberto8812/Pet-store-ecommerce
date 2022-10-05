import React,{useEffect,useState} from 'react'
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getCustomerShopping,getgraphicsData } from '../../../redux/actions';
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import PieStatus from '../graphics/PieStatus';
import CardStatus from './component/CardStatus';
import InputsChangueState from './component/InputsChangueState';
import clsx from 'clsx';
//
const Users = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0
  const custumerDataDb = useSelector(state => state.customerShopping);
  const statusGraphicsdb = useSelector(state => state.statistics.statisticsStatusProductpie);
  const custumerData=custumerDataDb!==undefined?custumerDataDb:[];
  const statusGraphics=statusGraphicsdb!==undefined?statusGraphicsdb:[];
  const [rowInf, setRowInf] = useState({})
  const [render, setRender] = useState('')

  let rows=[]
 let headers={}

  
  useEffect(() => {
    const getToken=async()=>{

      //pedimisn el token
  const token= await getAccessTokenSilently()
  console.log(token)
      //realizamon un arreglo con los header
      headers= {   
        headers:{
        authorization: `Bearer ${token}`
        },    
        }
      dispatch(getCustomerShopping(headers))
      dispatch(getgraphicsData(headers))
    }

    getToken()

  }, [render])


  const handleRowInfo=(data)=>{
    setRowInf(data)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: 250,
      editable: true,
    },
    {
      field: 'firstName',
      headerName: 'FirstName',
      width: 250,
      editable: true,
    },
    {
      field: 'invoice',
      headerName: 'Invoice',
      //type: 'number',
      width: 110,
      editable: true,
    },
    ,
    {
      field: 'total',
      headerName: 'Total',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      //type: 'number',
      width: 110,
      editable: true,
      cellClassName: (params) => {
        if (params.value == null) {
          return '';
        }
        return clsx('super-app', {
          pending:params.value=='PENDING',
          completed: params.value=='COMPLETED',
          cancelled: params.value=='CANCELLED',
        });
      },
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
       type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'product',
      headerName: 'Product',
      // type: 'number',
      width: 450,
      editable: true,
    },
    
  ];
  
  if(custumerData.length){
 for (const users of custumerData) {
  for (const sales of users.sales) {
    for (const saleDetails of sales.saleDetails) {
      for (const products of  saleDetails.products) {
        let dataRow={id:rows.length, email:users.email, firstName:users.name,invoice:sales.invoice,status:sales.status,total:sales.total,quantity:saleDetails.quantity,product:products.name }
        rows.push(dataRow)       
      }     
    }      
  } 
 }

  }

  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <Box sx={{ height: 'auto', width: '100%',border:'1px solid'}}> 

     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
     
     direction="row"
     justifyContent="center"
     alignItems="center"
     
     >

        {statusGraphics.length>0 && statusGraphics.map(data=>{
            return (
             <Grid item  xs={4} key={data.status}> 
             
              <CardStatus status={data.status} statusCount={data.status_count}/>
             
               </Grid>
             )
     
    })}
     <Grid item xs={4}
       container
      
      direction="row"
      justifyContent="center"
      alignItems="center"
     >
     <Box sx={{ height: '100px',width:'100px',minWidth:'100px',display:'flex',justifyContent:'center'}}>
      <PieStatus statusGraphics={statusGraphics}/>
      </Box>
     </Grid>

     </Grid>
     <Grid container  gap={2}  sx={{padding:'20px'}}>

      <InputsChangueState rowInf={rowInf} setRender={setRender} render={render}/>
     </Grid>

     </Box>

    <Box sx={{ height: 500, width: '100%',
    
            '& .super-app.completed': {
            backgroundColor: 'rgb(54, 162, 235)',
            color: '#020202',
              fontWeight: '600',
            },
            '& .super-app.cancelled': {
             backgroundColor: '#272727',
            color: '#e2e2e2',
            fontWeight: '600',
           },
            '& .super-app.pending': {
             backgroundColor: 'rgb(255, 99, 132)',
            color: '#000000',
            fontWeight: '600',
           },
  
      }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onRowClick={(e)=>handleRowInfo(e.row)}
      />
    </Box>
 
    </Box>
  )
}

export default Users