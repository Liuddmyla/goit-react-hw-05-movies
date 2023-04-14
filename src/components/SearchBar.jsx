import {  useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import css from '../css/SearchBar.module.css';

const SearchBar = ({onSubmit}) => {

    const [filmName, setFilmName] = useState(''); 

    const handleNameChange = (e) => {
        setFilmName(e.currentTarget.value.toLowerCase());       
    }

    const handleSubmit = (e) => {
        e.preventDefault();      

        if (filmName.trim() === '') {
           return toast.info('Enter a name for the film !', {autoClose: 2000,});
        }        
        onSubmit(filmName.trim());     
        
        setFilmName('');
    }    

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <button type="submit" className={css.button}>
                <span className={css.icon}><SearchIcon /></span>
            </button>
            <input
                className={css.input}    
                type="text"
                placeholder="Search films..."
                value={filmName}
                onChange={handleNameChange}
            />
        </form>
    )    
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,      
}

export default SearchBar;
