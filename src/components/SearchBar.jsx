import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import css from '../css/SearchBar.module.css';

const SearchBar = ({ onSubmit}) => {    

    const [filmName, setFilmName] = useState(''); 
    // const [searchParams, setSearchParams] = useSearchParams();

    // const searchQuery = searchParams.get("query")??"";

    const handleNameChange = (e) => {
        setFilmName(e.currentTarget.value);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();      

        if (filmName.trim() === '') {
           return toast.info('Enter a name for the film !', {autoClose: 2000,});
        }        
        onSubmit(filmName.trim().toLowerCase());
        
        // setSearchParams({ query: e.currentTarget.elements.search.value });        
        
    }    

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <button type="submit" className={css.button}>
                <span className={css.icon}><SearchIcon /></span>
            </button>
            <input
                className={css.input}  
                name="search"
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
