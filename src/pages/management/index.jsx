import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Management.module.css";
import * as XLSX from "xlsx";
import TableBusinessManagement from "@/components/TableBusinessManagement";
import TableHistoryManagement from "@/components/TableHistoryManagement";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateBusinessUploadHistory } from "@/graphql/custom/subscription";
import { listBusinessUploadHistories } from "@/graphql/custom/queries";

const Management = () => {
  const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newFile, setNewFile] = useState(null);
  const [listHistory, setListHistory] = useState(null);

  const fetchFile = async (e) => {
    const file = e.target.files[0];
    setNewFile(e);
    if (!file) return;

    const reader = new FileReader();

    /* funcion */
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setFileContent(jsonData);
    };
    /*  */
    reader.readAsArrayBuffer(file);
  };

  const fetchListBusinessHistory = async () => {
    const response = await API.graphql({
      query: listBusinessUploadHistories,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setListHistory(response.data.listBusinessUploadHistories.items);
  };
  useEffect(() => {
    fetchListBusinessHistory();
    if (loading) {
      newFile.target.value = "";
    }
  }, [loading]);

  return (
    <div className={styles.management}>
      <Navbar />
      <div className={styles.content}>
        <h1>Bienvenido a la carga de registros</h1>

        <div className={styles.border}>
          <div className={styles.button}>
            <p>
              Sube un archivo de excel para empezar a registrar tus negocios
            </p>
            <input type="file" onChange={fetchFile} accept=".xlsx,.xls" />
          </div>
        </div>
        {fileContent && (
          <TableBusinessManagement
            table={fileContent}
            reset={() => setFileContent(null)}
            loading={(e) => setLoading(e)}
          />
        )}

        {!fileContent && listHistory && (
          <TableHistoryManagement table={listHistory} />
        )}
      </div>
    </div>
  );
};

export default Management;
