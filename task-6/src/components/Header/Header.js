import React from 'react';
import {Link} from "react-router-dom";

import logo from '../../pictures/logo1.png';
import './Header.css';

const Header = () => (
    <header className="header">
        <Link className="logo-link" to="/">
            <img src={logo} alt="Logo" className="logo"/>
        </Link>
        <nav className="navigation">
            <ul className="header-link-list">
                <li className="header-link"><Link className="link" to='/'>Home</Link></li>
                <li className="header-link"><Link className="link" to='/employees'>Staff</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;