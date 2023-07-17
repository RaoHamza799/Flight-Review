import React, { useState, useEffect } from "react";
import axios from "axios";
import { Airline } from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const Airlines = () => {
  const [airlines, setairlines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/airlines")
      .then((resp) => {
        setairlines(resp.data);
      })
      .catch((resp) => {
        console.log(resp);
      });
  }, []);

  const list = airlines.map((item) => {
    return <Airline key={item?.name} item={item} />;
  });

  return (
    <Home>
      <Header>
        <h1>Open Flights</h1>
        <Subheader>Honest Riviews Related tgo flights</Subheader>
      </Header>
      <Grid>{list}</Grid>
    </Home>
  );
};
export default Airlines;
