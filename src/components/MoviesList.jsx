import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import css from '../css/HomeMovies.module.css';

const MoviesList = ({ films }) => {  
   
  return (
        films.map(film => {
            return <li key={film.id} className={css.item}>                
                <Link to={`/movies/${film.id}`} className={css.card}>
                    {film['poster_path'] ? <img src={`https://image.tmdb.org/t/p/w200${film['poster_path']}`} alt='poster' />
                        : <img src="https://burst.shopifycdn.com/photos/a-movie-clapper-board-film-roll-and-sprocket-wheel.jpg?width=500&format=pjpg&exif=1&iptc=1" alt="actor" width="200" height="300" />}
                    <p>{film.title}</p></Link>     
            </li>
        })
    );
};

MoviesList.propTypes = {   
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,           
       })
    )
}

export default MoviesList;