import { Link } from "react-router-dom";

export const HomeList = ({ films }) => {  
   
  return (
        films.map(film => {
            return <li key={film.id} >                
                <Link to={`/movies/${film.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w200${film['poster_path']}`} alt='poster' />
                    {film.title}</Link>     
            </li>
        })
    );
};

export default HomeList;