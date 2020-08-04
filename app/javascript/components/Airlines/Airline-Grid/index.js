import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Card, AirlineLogo, AirlineName, LinkWrapper } from "./styles";

const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </AirlineLogo>
      <AirlineName>{props.attributes.name}</AirlineName>
      <div className="airline-score">{props.attributes.average_score}</div>
      <LinkWrapper>
        <Link to={`/airlines/${props.attributes.slug}`}>
          {props.attributes.slug}
        </Link>
      </LinkWrapper>
    </Card>
  );
};

export default Airline;
