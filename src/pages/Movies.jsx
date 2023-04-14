import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader";
import MoviesList from "components/MoviesList";
import css from '../css/HomeMovies.module.css';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const Movies = () => {

  const [filmName, setFilmName] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=7e2a233d026ec02ed6e123027bfe9410&query=${filmName}&language=en-US&page=1&include_adult=false`;

    if (!filmName) return;

     setStatus(Status.PENDING);

    fetch(URL).then(response => {
      if (response.ok) {                
        return response.json();
      }
        return Promise.reject(new Error('Error!'))
     })
      .then(({results}) => {        
        setFilms(results);
        setStatus(Status.RESOLVED);             
     })
     .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
     }); 
    
  },[filmName])

  const handleFormSubmit = (name) => {
    if (name) {
      setFilmName(name);      
    }    
  } 
  
  return (<>
    <ToastContainer/>
    <SearchBar onSubmit={handleFormSubmit}/>
    <div>
    {status === Status.PENDING  && <Loader />}
    {status === Status.REJECTED && (<div>{error.message}</div>)}
    {status === Status.RESOLVED && (<ul className={css.list}><MoviesList films={films} /></ul>)}  
    </div> 
  </>    
  );
};

export default Movies;