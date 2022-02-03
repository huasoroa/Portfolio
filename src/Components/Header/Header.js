import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header__bar">
                {" "}
                <Link to="/">Home</Link>
            </nav>
            <nav className="header__list">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/PROJECTS">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/WHOAMI">WHOAMI</Link>
                    </li>
                    <li>
                        <Link to="/CONTACT">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
