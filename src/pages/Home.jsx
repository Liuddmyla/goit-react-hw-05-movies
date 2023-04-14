import { useEffect, useState } from "react";
import { Loader } from "components/Loader";
import HomeList from "components/HomeList";
import css from '../css/HomeMovies.module.css';

const Status = {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
};

const Home = () => {

    const [status, setStatus] = useState(null);
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=7e2a233d026ec02ed6e123027bfe9410`;

        setStatus(Status.PENDING);

        fetch(URL).then(response => {
            if (response.ok) {                
             return response.json();
            }
            return Promise.reject(new Error('Error!'))
         })
         .then(({ results }) => {               
            setFilms(results);
            setStatus(Status.RESOLVED);             
         })
         .catch(error => {
            setError(error);
            setStatus(Status.REJECTED);
        });   
    },[])


  return (
      <main className={css.box}>
          <h1 className={css.title}>Trending today</h1>
          {status === Status.PENDING  && <Loader />}
          {status === Status.REJECTED && (<div>{error.message}</div>)}          
          {films && (<ul className={css.list}><HomeList films={films} /></ul>)}
      </main>
  );
};

export default Home;

