import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import * as XLSX from "xlsx";
import { Storage } from "aws-amplify";
import ModalBusinessbyUser from "./ModalBusinessbyUser";
import ModalBusiness from "./ModalBusiness";
import ModalUser from "./ModalUser";

const TableBusinessClaim = ({ table, reset, loading }) => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [businessId, setBusinessId] = useState("");
  const [userId, setUserId] = useState("");

  const fetchBusinessClaim = async (status, userId, businessId, claimId) => {
    const path = "/api/businessClaim";
    let dataObj = {
      status: status,
      userID: userId,
      businessID: businessId,
      claimID: claimId,
    };

    const params = {
      headers: {},
      queryStringParameters: {
        data: JSON.stringify(dataObj),
      },
    };
    const url = `${path}?data=${params.queryStringParameters.data}`;
    const response = await fetch(url, {
      method: "POST",
    });
    const claim = await response.json();
    console.log(status, claim);
    loading();
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Estado de la solicitud",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === "PENDING"
              ? "PENDIENTE"
              : params.row.status === "ACCEPTED"
              ? "ACEPTADA"
              : "RECHAZADA"}
          </div>
        );
      },
    },
    {
      field: "business",
      headerName: "Negocio",
      width: 350,
      disableExport: true,
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                setBusinessId(params.row.businessID);
                setOpen(true);
              }}
              style={{
                padding: 7,
                outline: "none",
                backgroundColor: "green",
                border: "none",
                borderRadius: 4,
                color: "#fff",
                marginLeft: 30,
                fontSize: 12,
              }}
            >
              Ver negocio en reclamacion
            </button>
          </div>
        );
      },
    },
    {
      field: "user",
      headerName: "Usuario",
      width: 350,
      disableExport: true,
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                setUserId(params.row.userID);
                setOpenUser(true);
              }}
              style={{
                padding: 7,
                outline: "none",
                backgroundColor: "green",
                border: "none",
                borderRadius: 4,
                color: "#fff",
                marginLeft: 30,
                fontSize: 12,
              }}
            >
              Ver usuario que reclama
            </button>
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Solicitud",
      width: 350,
      disableExport: true,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === "PENDING" ? (
              <div>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "¿Estás seguro de que deseas aceptar la reclamacion?"
                      )
                    ) {
                      fetchBusinessClaim(
                        "ACCEPTED",
                        params.row.userID,
                        params.row.businessID,
                        params.row.id
                      );
                    }
                  }}
                  style={{
                    padding: 7,
                    outline: "none",
                    backgroundColor: "green",
                    border: "none",
                    borderRadius: 4,
                    color: "#fff",
                    marginLeft: 30,
                    fontSize: 12,
                  }}
                >
                  Aceptar
                </button>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "¿Estás seguro de que deseas rechazar la reclamacion?"
                      )
                    ) {
                      fetchBusinessClaim(
                        "REJECTED",
                        params.row.userID,
                        params.row.businessID,
                        params.row.id
                      );
                    }
                  }}
                  style={{
                    padding: 7,
                    outline: "none",
                    backgroundColor: "red",
                    border: "none",
                    borderRadius: 4,
                    color: "#fff",
                    marginLeft: 30,
                    fontSize: 12,
                  }}
                >
                  Rechazar
                </button>
              </div>
            ) : (
              "LA SOLICITUD YA FUE RESUELTA"
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Box sx={{ height: 500, width: 1000 }}>
        {console.log(table)}
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
        {open && (
          <ModalBusiness
            open={open}
            close={() => setOpen(false)}
            data={businessId}
          />
        )}
        {openUser && (
          <ModalUser
            open={openUser}
            close={() => setOpenUser(false)}
            data={userId}
          />
        )}
      </Box>
    </div>
  );
};

export default TableBusinessClaim;
