import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: 30px;
  img {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const totalReviews = props.review.length;
  return (
    <Wrapper>
      <h1>
        <img src={image_url} />
        {name}
      </h1>
      <div>
        <TotalReviews>{totalReviews} User Reviews</TotalReviews>
        <div className="startRating"></div>
        <TotalOutOf>3 out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
