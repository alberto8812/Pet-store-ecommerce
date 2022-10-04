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
import {HiPlus} from 'react-icons/hi';
import { deleteProducts, getAllProducts, editProducts} from '../../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'//libreia Auth0
import { useNavigate, Link, useParams } from "react-router-dom";
import './ProductsAdm.css'


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
  const {getAccessTokenSilently}=useAuth0()//componete de hook auth0
  let headers={}


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, flag]);

  const handleDelete = async (id, value) =>{
    //const token=await getToken()
   // console.log(token)
 
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
    dispatch(deleteProducts(id, setFlag, value,headers)); 
   }
   getToken()

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
            <StyledTableCell align="center">Status&nbsp;</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>Options</StyledTableCell>
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
              <StyledTableCell align="center">{row.deleted?"deleted":"active"}</StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleDelete(row.id, true)}} ><span data-tooltip = "delete"><RiDeleteBin6Line className='btnOptions'/></span></StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleEdit(row.id)}} ><span data-tooltip = "edit"><GrEdit className='btnOptions'/></span></StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleDelete(row.id, false)}} ><span data-tooltip = "activate"><HiPlus className='btnOptions'/></span></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsAdm

  
