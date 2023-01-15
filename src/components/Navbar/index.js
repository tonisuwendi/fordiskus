import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBox from '../SearchBox';
import AuthorizedButton from './AuthorizedButton';
import UnauthorizedButton from './UnauthorizedButton';

const Navbar = () => {
    const { authUser } = useSelector((states) => states);

    return (
        <header className="navbar">
            <div className="navbar__content">
                <Link to="/">
                    <h1 className="navbar__brand">
                        fordiskus
                    </h1>
                </Link>
                <SearchBox />
                <div className="navbar__button">
                    {authUser ? <AuthorizedButton /> : <UnauthorizedButton />}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
