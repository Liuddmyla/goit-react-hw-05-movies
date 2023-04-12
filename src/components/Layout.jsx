import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>        
            </nav>
            <Outlet/>
        </header>        
    </div>
  );
};

export default Layout;