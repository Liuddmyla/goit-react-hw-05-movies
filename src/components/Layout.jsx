import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import css from "../css/Layout.module.css";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: orange;
  }`;

export const Layout = () => {
  return (
    <div>
        <header className={css.header}>
            <nav className={css.nav}>
                <StyledLink to="/" className={css.link}> Home</StyledLink>
                <StyledLink to="/movies" className={css.link}>Movies</StyledLink>        
            </nav>            
        </header> 
        <Outlet />
    </div>
  );
};

export default Layout;