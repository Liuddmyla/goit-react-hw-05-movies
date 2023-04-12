import { Link } from "react-router-dom";

export const HomeList = ({ films }) => {  
   
  return (
        films.map(film => {
            return <li key={film.id} >
               <Link to="/movies/:movieId">{film.title}</Link>     
            </li>
        })
    );
};

export default HomeList;