import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SearchBox from '../SearchBox';

const Navbar = () => (
    <header className="navbar">
        <div className="navbar__content">
            <Link to="/">
                <h1 className="navbar__brand">
                    fordiskus
                </h1>
            </Link>
            <SearchBox />
            <div className="navbar__button">
                <Link to="/register">
                    <Button label="Daftar" variant="outline" />
                </Link>
                <Link to="/login">
                    <Button label="Masuk" />
                </Link>
            </div>
        </div>
    </header>
);

export default Navbar;
