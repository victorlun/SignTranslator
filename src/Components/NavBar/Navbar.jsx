import React from 'react';
import { NavLink } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import './Navbar.css';

const Navbar = () => {
    const {user} = useUser();

    return (
        <nav className="navbar">
            <h1>LOST IN TRANSLATION</h1>
            <NavLink to="/" className="nav-link">Login</NavLink>
            {user !== null &&
                <>
                    <NavLink to="/translate" className="nav-link">Translate</NavLink>
                    <NavLink to="/profile" className="nav-link">Profile</NavLink>

                </>
            }
            <br/><br/><br/>
        </nav>
    )
}

export default Navbar;
