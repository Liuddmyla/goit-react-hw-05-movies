import { Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>        
      </nav>
      <Routes>
        <Route path="/" element={<div>Home component</div>} />
        <Route path="/movies" element={<div>Movies component search</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>      
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </div>
  );
};


// https://api.themoviedb.org/3/movie/550?api_key=7e2a233d026ec02ed6e123027bfe9410