import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1>My Trusted Source</h1>
                <NavLink to='/' activeClassName="is-active" exact="true">Articles</NavLink>
                <NavLink to='/sources' activeClassName="is-active">Sources</NavLink>
            </header>
        </div>
    );
};

export default Header;
