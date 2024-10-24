import { Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/custom/queries";
import Link from "next/link";
import { getBusiness } from "@/graphql/queries";

const ModalBusiness = ({ open, close, data }) => {
  const [business, setBusiness] = useState(null);
  const [act, setAct] = useState(null);

  const fetchData = async () => {
    console.log(data);
    const response = await API.graphql({
      query: getBusiness,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        id: data,
      },
    });

    console.log(response);
    setBusiness(response?.data?.getBusiness);
    let activity = JSON.parse(response?.data?.getBusiness?.activity);
    setAct(activity);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  if (business !== null && act !== null)
    return (
      <div>
        <Modal
          open={open}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className={styles.modal}>
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.title}>
                  <h2>{`Vista previa del negocio`}</h2>
                </div>
                <div className={styles.inputs}>
                  <div className={styles.input}>
                    <TextField
                      id="outlined-basic"
                      defaultValue={business?.name}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Nombre"
                    />
                    <TextField
                      id="outlined-basic"
                      defaultValue={business?.email}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Correo"
                    />
                  </div>
                  <div className={styles.input}>
                    <TextField
                      id="outlined-basic"
                      defaultValue={business?.phone}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Telefono"
                    />
                    <TextField
                      id="outlined-basic"
                      defaultValue={act?.main}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Area"
                    />
                  </div>
                  <div className={styles.input}>
                    <TextField
                      id="outlined-basic"
                      defaultValue={act?.sub}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Actividad"
                    />

                    <Link
                      href={business?.thumbnail}
                      target="_blank"
                      style={{
                        color: "white",
                        fontWeight: 600,
                        padding: 10,
                        borderColor: "#1f1f1f",
                        borderWidth: 1,
                        backgroundColor: "#ffb703",
                        borderRadius: 8,
                        width: 250,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Ver foto
                    </Link>
                  </div>
                </div>
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={close}
                  sx={{
                    width: 100,
                  }}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
};

export default ModalBusiness;
