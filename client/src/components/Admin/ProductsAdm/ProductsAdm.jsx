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
import { deleteProducts, getAllProducts, editProducts, activeProducts} from '../../../redux/actions/index';
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
  const {isAuthenticated,getAccessTokenSilently}=useAuth0()//componete de hook auth0

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, flag]);

  const handleDelete = (id) =>{
    console.log(id)
    dispatch(deleteProducts(id, setFlag));
  }

  const handleActive = (id) => {
    dispatch(activeProducts(id, setFlag))
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
              <StyledTableCell align="center">{row.deleted?"deleted":"deletedn't"}</StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleDelete(row.id)}} ><span data-tooltip = "delete"><RiDeleteBin6Line className='btnOptions'/></span></StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleEdit(row.id)}} ><span data-tooltip = "edit"><GrEdit className='btnOptions'/></span></StyledTableCell>
              <StyledTableCell align="center" onClick={() => {handleActive(row.id)}} ><span data-tooltip = "activate"><HiPlus className='btnOptions'/></span></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsAdm

  
