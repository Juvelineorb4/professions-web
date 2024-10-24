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
      field: "uploadDate",
      headerName: "Fecha de subida",
      width: 150,
      editable: true,
    },
    {
      field: "total",
      headerName: "Cantidad de negocios subido",
      width: 300,
      editable: true,
    },
    {
      field: "completionDate",
      headerName: "Fecha de finalizacion de subida",
      width: 250,
      editable: true,
    },
    {
      field: "validCount",
      headerName: "Cantidad de negocios validos",
      width: 250,
      editable: true,
    },
    {
      field: "invalidCount",
      headerName: "Cantidad de negocios invalidos",
      width: 250,
      editable: true,
    },
    {
      field: "originalPath",
      headerName: "URL de archivo subido",
      width: 200,
      editable: true,
    },
    {
      field: "invalidPath",
      headerName: "URL de archivo con negocios invalidos",
      width: 250,
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
