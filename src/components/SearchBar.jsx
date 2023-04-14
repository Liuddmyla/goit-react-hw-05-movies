import {  useState } from "react";
import PropTypes from 'prop-types';
// import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import {ReactComponent as SearchIcon} from "../icons/search.svg";

const SearchBar = ({onSubmit}) => {

    const [filmName, setFilmName] = useState(''); 

    const handleNameChange = (e) => {
        setFilmName(e.currentTarget.value.toLowerCase().trim());       
    }

    const handleSubmit = (e) => {
        e.preventDefault();      

        if (filmName === '') {
           return toast.info('Enter a name for the film !', {autoClose: 2000,});
        }        
        onSubmit(filmName);     
        
        setFilmName('');
    }    

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" >
                <span ><SearchIcon /></span>
            </button>
            <input                
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
