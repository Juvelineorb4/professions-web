import React, { useState, useEffect } from "react";
import { API, withSSRContext } from "aws-amplify";
import Navbar from "../../components/Navbar";
import CardTotal from "@/components/CardTotal";
import CardSummary from "@/components/CardSummary";
import styles from "../../styles/Claim.module.css";
import MultipleSelect from "@/components/MultipleSelect";
import CircularProgress from "@mui/material/CircularProgress";
import TableBusinessClaim from "@/components/TableBusinessClaim";
import { listClaimRequests } from "@/graphql/queries";

const Home = () => {
  const [dataNotClaim, setNewDataNotClaim] = useState(null);
  const [dataClaim, setNewDataClaim] = useState(null);
  const [selectCountry, setSelectCountry] = useState("Todos");
  const [table, setTable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);

  const fetchTotalSummary = async () => {
    setLoading(true);
    /* sin reclamar */
    const pathNotClaim = "/api/totalSummaryNotClaim";
    const paramsNotClaim = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
        statusOwner: "NOT_ASSIGNED",
      },
    };
    const urlNotClaim = `${pathNotClaim}?country=${paramsNotClaim.queryStringParameters.country}&statusOwner=${paramsNotClaim.queryStringParameters.statusOwner}`;
    const responseNotClaim = await fetch(urlNotClaim, {
      method: "GET",
    });
    const dataNotClaim = await responseNotClaim.json();

    /* reclamados */
    const pathClaim = "/api/totalSummaryClaim";
    const paramsClaim = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
        statusOwner: "ASSIGNED",
      },
    };
    const urlClaim = `${pathClaim}?country=${paramsClaim.queryStringParameters.country}&statusOwner=${paramsClaim.queryStringParameters.statusOwner}`;
    const responseClaim = await fetch(urlClaim, {
      method: "GET",
    });
    const dataClaim = await responseClaim.json();
    console.log("asignados", dataClaim);
    console.log("no asignados", dataNotClaim);
    setNewDataNotClaim(dataNotClaim);
    setNewDataClaim(dataClaim);
    setLoading(false);
  };

  const reset = () => {
    console.log("Cambio");
  };

  const getBusinessClaimTable = async () => {
    const response = await API.graphql({
      query: listClaimRequests,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setTable(response.data.listClaimRequests.items);
  };

  useEffect(() => {
    fetchTotalSummary();
  }, [selectCountry]);

  useEffect(() => {
    getBusinessClaimTable();
  }, [loadingTable]);

  return (
    <div className={styles.claim}>
      <Navbar />
      <div className={styles.content}>
        <p className={styles.titleAdmin}>Resumen y gestion de reclamaciones</p>
        <MultipleSelect
          select={selectCountry}
          setSelect={(e) => setSelectCountry(e)}
          reset={() => reset()}
        />
        {loading ? (
          <div className={styles.loading}>
            <CircularProgress size={100} />
          </div>
        ) : (
          <div>
            <div className={styles.contentUsers}>
              <p className={styles.title}>
                Negocios sin reclamar{" "}
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.users}>
                <CardTotal
                  texts={{
                    title: "Total de Negocios Registrados sin reclamar",
                    country: selectCountry,
                  }}
                  data={dataNotClaim?.total_businesses}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Negocios Registrados sin reclamar",
                    country: selectCountry,
                  }}
                  data={dataNotClaim?.data}
                />
              </div>
            </div>
            <div className={styles.contentBusiness}>
              <p className={styles.title}>
                Negocios reclamados
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.business}>
                <CardTotal
                  texts={{
                    title: "Total de Negocios Registrados reclamados",
                    country: selectCountry,
                  }}
                  data={dataClaim?.total_businesses}
                  users={false}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Negocios Registrados reclamados",
                    country: selectCountry,
                  }}
                  data={dataClaim?.data}
                />
              </div>
            </div>
          </div>
        )}

        <div className={styles.contentTable}>
          <p className={styles.titleAdmin}>
            Gestion de solicitudes de reclamaciones de negocios
          </p>
          {table && (
            <TableBusinessClaim
              table={table}
              loading={() => setLoadingTable(!loadingTable)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
