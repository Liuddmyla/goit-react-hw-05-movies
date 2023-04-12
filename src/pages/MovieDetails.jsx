import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";


export const MoviesDetails = () => {
  const { movieId } = useParams();

  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);   
  
  useEffect(() => {
        const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7e2a233d026ec02ed6e123027bfe9410`;       

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
         })
         .catch(error => {console.log('error') });   
    },[movieId])
  
    return (
    <main>
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt='poster' />
          <div>
            <h2>{title} ({date})</h2>
            <p>User Score: {score}</p>
            <p>Overview:</p>
            <p>{overview}</p>
            <p>Genres:</p>
            <div>
              {genres.map(genre => genre.name).join(', ')}
            </div>                        
          </div>
        </div>
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