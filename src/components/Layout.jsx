import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import css from "../css/Layout.module.css";
import { Loader } from "./Loader";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: orange;
  }`;

const Layout = () => {   
  
  return (
    <div>
        <header className={css.header}>
            <nav className={css.nav}>
                <StyledLink to="/" className={css.link} > Home</StyledLink>
                <StyledLink to="/movies" className={css.link} >Movies</StyledLink>        
            </nav>            
        </header>
          <Suspense fallback={<><Loader/></>}>
            <Outlet />
          </Suspense>
        
    </div>
  );
};

export default Layout;