import { Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/custom/queries";
import Link from "next/link";
import { getBusiness, getUsers } from "@/graphql/queries";

const ModalUser = ({ open, close, data }) => {
  const [user, setUser] = useState(null);
  const [act, setAct] = useState(null);

  const fetchData = async () => {
    console.log(data);
    const response = await API.graphql({
      query: getUsers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        id: data,
      },
    });

    console.log(response);
    setUser(response?.data?.getUsers);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  if (user !== null)
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
                  <h2>{`Vista previa del usuario`}</h2>
                </div>
                <div className={styles.inputs}>
                  <div className={styles.input}>
                    <TextField
                      id="outlined-basic"
                      defaultValue={user?.name}
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
                      defaultValue={user?.lastName}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Apellido"
                    />
                  </div>
                  <div className={styles.input}>
                    <TextField
                      id="outlined-basic"
                      defaultValue={user?.email}
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
                    <TextField
                      id="outlined-basic"
                      defaultValue={user?.gender}
                      variant="outlined"
                      disabled={true}
                      inputProps={{
                        style: {
                          fontSize: 14,
                          fontFamily: "Montserrat",
                          fontWeight: 600,
                        },
                      }}
                      label="Genero"
                    />
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

export default ModalUser;
