import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`;

const Airlinelogo = styled.div`
  width:50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef
    align: center;
  }
`;

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

export const Airline = (props) => {
  return (
    <Card>
      <Airlinelogo>
        <img src={props?.item?.image_url} alt={props?.item?.name} />
      </Airlinelogo>
      <AirlineName>{props?.item?.name}</AirlineName>
      <Rating score={props?.item?.avg_score} />
      <LinkWrapper>
        <Link
          to={`/airlines/${props?.item?.slug}`}
          state={{ slug: props?.item?.slug }}
        >
          View Airline
        </Link>
      </LinkWrapper>
    </Card>
  );
};

export default Airline;
