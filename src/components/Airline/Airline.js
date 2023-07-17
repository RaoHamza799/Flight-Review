import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  left-padding: 50px;
`;

const Airline = (props) => {
  const location = useLocation();
  const [airline, setairline] = useState({});
  const [review, setreview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAirLineData();
  }, []);
  console.log(airline);

  const getAirLineData = () => {
    debugger;
    const slug = location.state.slug;
    const url = `http://localhost:3000/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((resp) => {
        setairline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => {
        console.log(resp);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    // setreview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    setreview((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(review);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const airline_id = airline.id;

    axios
      .post("http://localhost:3000/api/v1/reviews", { review, airline_id })
      .then((resp) => {
        debugger;
        console.log("resp.data", resp.data);
        const included = [...airline.reviews, resp.data];
        setairline({ ...airline, reviews: included });
        setreview({ title: "", description: "", score: 0 });
        // getAirLineData()
      })
      .catch((resp) => {});
  };

  let reviews;

  if (loaded && airline.reviews) {
    reviews = airline.reviews.map((item, index) => {
      // console.log('single',item)
      return <Review key={index} attributes={item} />;
    });
  }

  const setRating = (score, e) => {
    e.preventDefault();
    setreview({ ...review, score });
  };
  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header attributes={airline} review={airline.reviews} />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline}
              review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
