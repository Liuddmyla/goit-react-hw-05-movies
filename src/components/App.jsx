import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MoviesDetails from "pages/MovieDetails";
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews/>} />
          </Route>      
          <Route path="*" element={<div>NotFound</div>} />
        </Route>        
      </Routes>
    </div>
  );
};


