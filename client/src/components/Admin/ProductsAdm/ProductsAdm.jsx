import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {GrEdit} from 'react-icons/gr';
import { deleteProducts, getAllProducts, editProducts} from '../../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { useNavigate, Link, useParams } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ProductsAdm= () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [flag, setFlag] = useState(false)
  const navigate = useNavigate()
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, flag]);

  const handleDelete = (id) =>{
    console.log(id)
    dispatch(deleteProducts(id, setFlag));
  }

const handleEdit = (id) =>{
    navigate('/admin/edit/' + id)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="center">Product Name</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Stock&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Category&nbsp;</StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>Options</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.stock}</StyledTableCell>
              <StyledTableCell align="center">{row.category?.name}</StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleDelete(row.id)}}><RiDeleteBin6Line/></StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleEdit(row.id)}}><GrEdit/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsAdm

  
////////////////////////////////////7
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { deleteProducts, getAllProducts, editProducts} from '../../../redux/actions/index';
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";

// // const columns = [
// //   { field: 'id', headerName: 'ID', width: 70 },
// //   { field: 'name', headerName: 'Name', width: 130 },
// //   { field: 'price', headerName: 'Price', width: 130 },
// //   {
// //     field: 'stock',
// //     headerName: 'Stock',
// //     type: 'number',
// //     width: 90,
// //   },
// //   {
// //     field: 'category',
// //     headerName: 'Category',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     // valueGetter: (params) =>
// //     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// // ];

// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// const ProductsAdm= () => {
//   const dispatch = useDispatch();
//     const products = useSelector((state) => state.products);
//     const [flag, setFlag] = useState(false)
  
//     useEffect(() => {
//       dispatch(getAllProducts());
//     }, [dispatch, flag]);
  
//     const handleDelete = (id) =>{
//       console.log(id)
//       dispatch(deleteProducts(id, setFlag));
//     }
  
//   const handleEdit = (id) =>{
//       console.log(id) 
//       const getToken=async()=>{
//           //pedimisn el token
//         const token= await getAccessTokenSilently()
//           //realizamon un arreglo con los header
//         const headers= {   
//             headers:{
//             authorization: `Bearer ${token}`
//             },    
//             }
//         dispatch(editProducts(id, headers))
//       }
    
//       getToken()
    
//     }

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 130 },
//     { 
//       field: 'price', 
//       headerName: 'Price', 
//       type: 'number',
//       width: 130 },
//     {
//       field: 'stock',
//       headerName: 'Stock',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'category',
//       headerName: 'Category',
//       // description: 'This column has a value getter and is not sortable.',
//       // sortable: false,
//       width: 160,
//       // valueGetter: (params) =>
//       //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
//   const rows = products?.map((rows)=> {rows.name, rows.id, rows.price, rows.stock, rows.category})
//     // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ;



//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );

// }


// export default ProductsAdm