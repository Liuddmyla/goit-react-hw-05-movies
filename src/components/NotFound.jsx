import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../icons/undo2.svg";
import css from "../css/NotFound.module.css";

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/');
    }

    return (
        <div className={css.box}>
            <p className={css.text}>NotFound</p>
            <button type="button" onClick={handleClick} className={css.button}><SearchIcon /> Go back </button>
        </div>
    )    
}

export default NotFound;