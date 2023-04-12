import { Link } from "react-router-dom";
import css from '../css/Home.module.css';

export const HomeList = ({ films }) => {  
   
  return (
        films.map(film => {
            return <li key={film.id} className={css.item}>                
                <Link to={`/movies/${film.id}`} className={css.card}>
                    <img src={`https://image.tmdb.org/t/p/w200${film['poster_path']}`} alt='poster' />
                    <p>{film.title}</p></Link>     
            </li>
        })
    );
};

export default HomeList;