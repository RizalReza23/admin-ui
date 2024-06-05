import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
 
];

const rows = [
  { id: 1, Name: "Coffee" },
  { id: 2, Name: "Non Coffe" },
  { id: 3, Name: "Cake" },
  { id: 4, Name: "Pastry" },
  { id: 5, Name: "Cookie"},
];

const actionColumn = [
  {
   
    width: 200,
    
  },
];

const Mydatatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
