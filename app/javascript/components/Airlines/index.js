import React, { useState, useEffect, Fragment } from "react";
import api from "../../services/api";
import { Home, Header, SubHeader, Grid } from "./styles";
import Airline from "./Airline-Grid/index";

function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    async function loadAirlines() {
      const response = await api.get("/airlines");
      setAirlines(response.data.data);
    }

    loadAirlines();
  }, []);

  return (
    <>
      <Home>
        <Header>
          <h1>OpenFlights</h1>
          <SubHeader>Honest, unbiased airline reviews.</SubHeader>
        </Header>
        <Grid>
          {airlines.map((airline) => (
            <Airline
              key={airline.attributes.name}
              attributes={airline.attributes}
            />
          ))}
        </Grid>
      </Home>
    </>
  );
}

export default Airlines;
