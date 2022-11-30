import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyTitle from "./components/MyTitle";
import MyFooter from "./components/MyFooter";
import SingleCarousel from "./components/SingleCarousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import CarouselList from "./components/CarouselList";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#000",
          color: "white",
          height: "100%",
        }}
      >
        <MyNavbar />
        <MyTitle />

        <Routes>
          <Route element={<CarouselList />} path="/" />
          <Route element={<TvShows />} path="/tvshows" />
          <Route element={<MovieDetails />} path="/details/:movieId" />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
