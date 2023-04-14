import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader";
import css from "../css/Cast.module.css";

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const Cast = () => {
  const { movieId } = useParams();
    
  
  const [actors, setActors] = useState([]); 
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7e2a233d026ec02ed6e123027bfe9410`;       
    
    setStatus(Status.PENDING);

    if (!movieId) return;

    fetch(URL).then(response => {
      if (response.ok) {         
        return response.json();
      }
        return Promise.reject(new Error('Error!'))
     })
     .then(({cast}) => {         
       setActors(cast);        
       setStatus(Status.RESOLVED);    
     })
     .catch(error => {
       setError(error);
       setStatus(Status.REJECTED);
     });   
  }, [movieId]) 
  
 
  return (
    <div>      
      {status === Status.REJECTED && (<div>{error.message}</div>)}
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && (<ul className={css.list}>          
          {actors.map(actor=>{
              return <li key={actor.id} className={css.item}>
                  {actor['profile_path'] ? <img src={`https://image.tmdb.org/t/p/w200${actor['profile_path']}`} alt='actor' /> :
                      <img src="https://kartinkin.net/uploads/posts/2022-03/thumbs/1646873360_3-kartinkin-net-p-inkognito-kartinki-3.jpg" alt="actor"  width="200" height="300" />}                  
                  <p className={css.name}>{actor.name}</p>
                  <p className={css.character}>Character: {actor.character}</p>
              </li>      
          })}
       </ul>  
      )}   
    </div>
  );
};

export default Cast;