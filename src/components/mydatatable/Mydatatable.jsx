import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
 
];

const rows = [
  { id: 1, firstName: "Coffee" },
  { id: 2, firstName: "Non Coffe" },
  { id: 3, firstName: "Cake" },
  { id: 4, firstName: "Pastry" },
  { id: 5, firstName: "Cookie"},
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
