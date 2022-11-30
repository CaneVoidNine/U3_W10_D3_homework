import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCarousel from "./SingleCarousel";

export default function TvShows() {
  return (
    <div>
      <Container fluid>
        <SingleCarousel search="Game of Thrones" />
        <SingleCarousel search="Friends" />
        <SingleCarousel search="Breaking Bad" />
      </Container>
    </div>
  );
}
