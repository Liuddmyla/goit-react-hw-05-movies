import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import css from '../css/HomeMovies.module.css';

const HomeList = ({ films }) => {  
   
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

HomeList.propTypes = {   
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,           
       })
    )
}

export default HomeList;

