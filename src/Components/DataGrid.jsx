import { DataGridPro, GridRowsProp, GridColDef } from '@mui/x-data-grid-pro';
import { Checkbox, Typography, Box, Button } from '@mui/material';
// const rows: GridRowsProp = [
//   { id: 1, name: 'Data Grid', description: 'the Community version' },
//   { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
//   { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
// ];
// const columns: GridColDef = [
//   { field: 'name', headerName: 'Product Name', width: 200 },
//   { field: 'description', headerName: 'Description', width: 300 },
// ];
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'description',
    headerName: 'Permission',
    flex: 1,
  },
  {
    field: 'assigned',
    headerName: 'Assigned',
    width: 150,
    renderCell: (params) => (
      <Checkbox
        checked={checkedPermissions.includes(params.row.id)}
        onChange={() => handleToggle(params.row.id)()}
      />
    ),
  },
];
export default function DataGrid() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
