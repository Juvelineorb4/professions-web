import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";

const TableHistoryManagement = ({ table }) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      editable: true,
    },
    {
      field: "dateInitial",
      headerName: "Fecha de subida",
      width: 150,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Cantidad de negocios subido",
      width: 300,
      editable: true,
    },
    {
      field: "dateFinal",
      headerName: "Fecha de finalizacion de subida",
      width: 150,
      editable: true,
    },
  ];
  return (
    <div>
      <Box sx={{ height: 500, width: 1000 }}>
        <DataGrid
          rows={table}
          columns={columns}
          density="compact"
          sx={{
            fontFamily: "Montserrat",
          }}
          showColumnVerticalBorder
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </div>
  );
};

export default TableHistoryManagement;
