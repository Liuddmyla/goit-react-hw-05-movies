import { Suspense, useEffect, useState } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import css from '../css/MovieDetails.module.css';
import { ReactComponent as SearchIcon } from "../icons/undo2.svg";
import { Loader } from "components/Loader";

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const MoviesDetails = () => {
  const { movieId } = useParams();  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e2a233d026ec02ed6e123027bfe9410`;       
    
    setStatus(Status.PENDING);

    if (!movieId) return;

    fetch(URL).then(response => {
      if (response.ok) {         
        return response.json();
      }
        return Promise.reject(new Error('Error!'))
     })
     .then((data) => {           
       setPoster(data['poster_path']);
       setTitle(data.title);
       setDate(data['release_date']);
       setScore(data['vote_average'].toFixed(1));
       setOverview(data.overview);
       setGenres(data.genres);
       setStatus(Status.RESOLVED);    
     })
     .catch(error => {
       setError(error);
       setStatus(Status.REJECTED);
     });   
  }, [movieId])
   
  
    return (
      <main className={css.box}>
        {status === Status.REJECTED && (<div>{error.message}</div>)}
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && (<>
          <Link to={backLinkHref}><button type="button"  className={css.button}><SearchIcon /> Go back </button></Link>        
          <div className={css.card}>
            <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt='poster' />
            <div>
              <h2>{title} ({date})</h2>
              <p className={css.subtitle}>User Score: {score}</p>
              <p className={css.subtitle}>Overview:</p>
              <p>{overview}</p>
              <p className={css.subtitle}>Genres:</p>
              <div>
                {genres.map(genre => genre.name).join(', ')}
              </div>                        
            </div>
          </div>
          <div className={css.info}>
            <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
                </li>
                <li>
                  <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
                </li>        
              </ul>
          </div> 
          <Suspense fallback={<><Loader/></>}>
            <Outlet />
          </Suspense>          
        </>  
        )}        
    </main>
    );
};

export default MoviesDetails;