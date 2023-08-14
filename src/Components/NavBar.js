import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="nav-items container">
                    <div className="logo">
                        <NavLink to="/">
                            <h1>STAR WAR APP</h1>
                        </NavLink>
                    </div>
                    <ul>
                        <li>
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/char" className="nav-link">Characters</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

