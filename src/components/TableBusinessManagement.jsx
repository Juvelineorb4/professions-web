import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import * as XLSX from "xlsx";
import { Storage } from "aws-amplify";

const TableBusinessManagement = ({ table, reset, loading }) => {
  const createExcelBlob = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    return blob;
  };

  const fetchListBusiness = async () => {
    for (let i = 0; i < table.length; i++) {
      /* cambiar coordenadas */
      const coordinatesArray = table[i].location
        .split(", ")
        .map((pair) => pair.split(": "));

      const coordinatesObject = {};
      coordinatesArray.forEach(([key, value]) => {
        coordinatesObject[key] = parseFloat(value);
      });
      table[i].location = JSON.stringify(coordinatesObject);
    }
    console.log(table);

    const listBusiness = createExcelBlob(table);

    async function uploadXlsxFile(file) {
      try {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        const second = String(now.getSeconds()).padStart(2, "0");

        const fileName = `document/business/${year}-${month}-${day}/${hour}-${minute}-${second}/lista_de_negocios.xlsx`;

        const result = await Storage.put(fileName, file, {
          contentType: file.type,
          level: "public",
          progressCallback(progress) {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
        });

        console.log("Archivo subido con éxito:", result);
      } catch (error) {
        console.error("Error subiendo el archivo:", error.message || error);
      }
    }
    uploadXlsxFile(listBusiness);
    loading(true);
    reset();
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      editable: true,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 300,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Telefono",
      width: 150,
      editable: true,
    },
    {
      field: "location",
      headerName: "Ubicacion",
      width: 200,
      editable: true,
    },
    {
      field: "area",
      headerName: "Area",
      width: 200,
      editable: true,
    },
    {
      field: "activity",
      headerName: "Actividad",
      width: 200,
      editable: true,
    },
    {
      field: "image",
      headerName: "Imagen",
      width: 150,
      editable: true,
    },
  ];
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => fetchListBusiness()}
        sx={{
          marginBottom: 3,
        }}
      >
        Subir archivo
      </Button>
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

export default TableBusinessManagement;
