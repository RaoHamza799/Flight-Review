import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;

const Heading = (props) => {
  return <HeaderStyle>{props.text}</HeaderStyle>;
};

export default Heading;
