import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, useParams, useState, useEffect } from "react-router-dom";
import item from "../media/media0.jpg";

const MovieDetails = (props) => {
  //const [movie, setMovie] = useState(null);

  //const navigate = useNavigate();

  // useEffect(() => {
  // let detailsToShow = items.find((m) => m.id.toString() === params.movieId);
  // console.log("detailsToShow", detailsToShow);
  //setMovie(detailsToShow);
  //  });
  //};

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <h4>Movie:</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={item} alt="..."></img>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
