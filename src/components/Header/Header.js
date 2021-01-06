import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <header>
                <NavLink to='/' className="item" activeClassName="active" exact={true}>Articles</NavLink>
                <NavLink to='/sources' className="item" activeClassName="active">Sources</NavLink>
            </header>
        </div>
    );
};

export default Header;
