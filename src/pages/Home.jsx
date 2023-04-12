import { useEffect, useState } from "react";
import { Loader } from "components/Loader";
import HomeList from "components/HomeList";

const Status = {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
};

export const Home = () => {

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
                console.log(results); 
            setFilms(results);
            setStatus(Status.RESOLVED);      
         })
         .catch(error => {
            setError(error);
            setStatus(Status.REJECTED);
        });   
    },[])


  return (
      <main>
          <h1>Trending today</h1>
          {status === Status.PENDING  && <Loader />}
          {status === Status.REJECTED && (<div>{error.message}</div>)}          
          {status === Status.RESOLVED  && (<ul><HomeList films={films} /></ul>)}
      </main>
  );
};

export default Home;