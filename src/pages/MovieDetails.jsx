import { Outlet, Link, useParams } from "react-router-dom";


export const MoviesDetails = () => {
   const { movieId } = useParams();
  
    return (
    <main>
        <div>{movieId}</div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>        
        </ul> 
      <Outlet />  
    </main>
    );
};

export default MoviesDetails;