import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { getCustomerShopping } from '../../../redux/actions';
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Users = () => {
  const dispatch = useDispatch();
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0
  const custumerDataDb = useSelector(state => state.customerShopping);
  const custumerData=custumerDataDb!==undefined?custumerDataDb:[];
  let rows=[]
console.log(custumerData)
  
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
      dispatch(getCustomerShopping(headers))
    }

    getToken()

  }, [])

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
        let dataRow={id:sales.invoice, email:users.email, firstName:users.name,invoice:sales.invoice,status:sales.status,total:sales.total,quantity:saleDetails.quantity,product:products.name }
        rows.push(dataRow)       
      }     
    }      
  } 
 }

  }

  return (
    <Box sx={{ height: 500, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}

export default Users