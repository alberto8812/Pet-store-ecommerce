import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid,Box } from '@mui/material';
import PieUsers from '../graphics/PieUsers';

PieUsers
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Users = () => {
  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <Box sx={{ height: 'auto', width: '100%',border:'1px solid'}}> 

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          direction="row"
          justifyContent="center"
          alignItems="center">

   {/*statusGraphics.length>0 && statusGraphics.map(data=>{
       return (
        <Grid item  xs={4} key={data.status}> 
        
         <CardStatus status={data.status} statusCount={data.status_count}/>
        
          </Grid>
       )})*/}
        <Grid item  xs={4} > 
        
        
       
         </Grid>
        <Grid item xs={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">

            <Box sx={{ height: '100px',width:'100px',minWidth:'100px',display:'flex',justifyContent:'center'}}>
              {/*<PieUsers statusGraphics={statusGraphics}/>*/}
            
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