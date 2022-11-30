import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();

  const [MovieDetails, setMovieDetails] = useState({});

  async function fetchMovies() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=2ba0b717&i=${params.id}`
    );
    const data = await response.json();
    console.log(data);
    setMovieDetails(data);
  }
  console.log(params);

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <div className="main">
        <div className="text-center">
          <img src={MovieDetails.Poster} />
          <h3>{MovieDetails.Title}</h3>
          <p>{MovieDetails.Plot}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
