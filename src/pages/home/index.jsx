import React, { useState, useEffect } from "react";
import { API, withSSRContext } from "aws-amplify";
import Navbar from "../../components/Navbar";
import CardTotal from "@/components/CardTotal";
import CardSummary from "@/components/CardSummary";
import styles from "../../styles/Home.module.css";
import MultipleSelect from "@/components/MultipleSelect";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [dataUsers, setDataUsers] = useState(null);
  const [dataBusiness, setDataBusiness] = useState(null);
  const [dataBusinessOwner, setDataBusinessOwner] = useState(null);
  const [dataBusinessCharge, setDataBusinessCharge] = useState(null);
  const [selectCountry, setSelectCountry] = useState("Todos");
  const [loading, setLoading] = useState(false);

  const fetchTotalSummary = async () => {
    setLoading(true);
    /* users */
    const path = "/api/totalSummaryUsers";
    const params = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
      },
    };
    const url = `${path}?country=${params.queryStringParameters.country}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();

    /* business */
    const pathBusiness = "/api/totalSummaryBusiness";
    const paramsBusiness = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
      },
    };
    const urlBusiness = `${pathBusiness}?country=${paramsBusiness.queryStringParameters.country}`;
    const responseBusiness = await fetch(urlBusiness, {
      method: "GET",
    });
    const dataBusinessApi = await responseBusiness.json();

    /* owners */
    const pathOwner = "/api/totalSummaryClaim";
    const paramsOwner = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
        statusOwner: "OWNER",
      },
    };
    const urlOwner = `${pathOwner}?country=${paramsOwner.queryStringParameters.country}&statusOwner=${paramsOwner.queryStringParameters.statusOwner}`;
    const responseOwner = await fetch(urlOwner, {
      method: "GET",
    });
    const dataOwner = await responseOwner.json();

    /* charges */
    const pathCharge = "/api/totalSummaryCharge";
    const paramsCharge = {
      headers: {},
      queryStringParameters: {
        country: selectCountry === "Todos" ? "" : selectCountry,
      },
    };
    const urlCharge = `${pathCharge}?country=${paramsCharge.queryStringParameters.country}`;
    const responseCharge = await fetch(urlCharge, {
      method: "GET",
    });
    const dataCharge = await responseCharge.json();
    console.log(dataCharge);
    setDataUsers(data);
    setDataBusiness(dataBusinessApi);
    setDataBusinessOwner(dataOwner);
    setDataBusinessCharge(dataCharge);
    setLoading(false);
  };

  const reset = () => {
    console.log("Cambio");
  };
  useEffect(() => {
    fetchTotalSummary();
  }, [selectCountry]);

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.content}>
        <p className={styles.titleAdmin}>
          ¡Bienvenido al Administrador de Portaty!
        </p>
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
                Usuarios{" "}
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.users}>
                <CardTotal
                  texts={{
                    title: "Total de Usuarios Registrados",
                    country: selectCountry,
                  }}
                  data={dataUsers?.total_users}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Usuarios Registrados",
                    country: selectCountry,
                  }}
                  data={dataUsers?.data}
                />
              </div>
            </div>
            <div className={styles.contentBusiness}>
              <p className={styles.title}>
                Negocios
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.business}>
                <CardTotal
                  texts={{
                    title: "Total de Negocios Registrados",
                    country: selectCountry,
                  }}
                  data={dataBusiness?.total_businesses}
                  users={false}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Negocios Registrados",
                    country: selectCountry,
                  }}
                  data={dataBusiness?.data}
                />
              </div>
            </div>
            <div className={styles.contentOwner}>
              <p className={styles.title}>
                Negocios registrados por un usuario
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.business}>
                <CardTotal
                  texts={{
                    title: "Total de Negocios Registrados por un Usuario",
                    country: selectCountry,
                  }}
                  data={dataBusinessOwner?.total_businesses}
                  users={false}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Negocios Registrados por un Usuario",
                    country: selectCountry,
                  }}
                  data={dataBusinessOwner?.data}
                />
              </div>
            </div>
            <div className={styles.contentCharge}>
              <p className={styles.title}>
                Negocios registrados por carga masiva
                {selectCountry === "VEN"
                  ? " en Venezuela"
                  : selectCountry === "COL"
                  ? " en Colombia"
                  : ""}
              </p>
              <div className={styles.business}>
                <CardTotal
                  texts={{
                    title: "Total de Negocios Registrados por carga masiva",
                    country: selectCountry,
                  }}
                  data={dataBusinessCharge?.total_businesses}
                  users={false}
                />
                <CardSummary
                  texts={{
                    title: "Resumen de Negocios Registrados por carga masiva",
                    country: selectCountry,
                  }}
                  data={dataBusinessCharge?.data}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
