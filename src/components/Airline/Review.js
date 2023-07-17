import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import Heading from "../Style/Heading";
import Header from "./Header";

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  back-g
  margin-right: 12px;
  border: 2px solid rgb(113 180 6);
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: "Poppins-Bold";
  font-size: 18px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <Card>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Heading text={"Title"} />
      <Title>{title}</Title>
      <Heading text={"Description"} />
      <Description>{description}</Description>
    </Card>
  );
};

export default Review;
