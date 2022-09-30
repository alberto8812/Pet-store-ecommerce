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
import { deleteProducts, getAllProducts} from '../../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";


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

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, flag]);

  const handleDelete = (id) =>{
    dispatch(deleteProducts(id, setFlag));
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
              <StyledTableCell align="center"><GrEdit/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsAdm
  
