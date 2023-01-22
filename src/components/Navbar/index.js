import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBox from '../SearchBox';
import AuthorizedButton from './AuthorizedButton';
import UnauthorizedButton from './UnauthorizedButton';
import {
    NavbarBrand, NavbarButton, NavbarContent, NavbarStyled,
} from './styled';

const Navbar = () => {
    const { authUser } = useSelector((states) => states);

    return (
        <NavbarStyled>
            <NavbarContent>
                <Link to="/">
                    <NavbarBrand>fordiskus</NavbarBrand>
                </Link>
                <SearchBox />
                <NavbarButton>
                    {authUser ? <AuthorizedButton /> : <UnauthorizedButton />}
                </NavbarButton>
            </NavbarContent>
        </NavbarStyled>
    );
};

export default Navbar;
