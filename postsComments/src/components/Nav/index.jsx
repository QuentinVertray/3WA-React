import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-menu is-active is-flex is-justify-content-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "navbar-item has-text-weight-bold" : "navbar-item"
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/add"
                    className={({ isActive }) =>
                        isActive ? "navbar-item has-text-weight-bold" : "navbar-item"
                    }
                >
                    Ajouter un post
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;