import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import useResponsive from '../../hooks/useReponsive';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

const AuthorizedButton = () => {
    const dispatch = useDispatch();
    const { isMobile } = useResponsive();

    const handleLogout = () => {
        dispatch(asyncUnsetAuthUser());
    };

    return (
        <>
            <Link to="/new">
                <Button label="Buat Diskusi" />
            </Link>
            <Button
                label={isMobile ? '' : 'Keluar'}
                variant="outline-danger"
                rightIcon={<RiLogoutCircleRLine />}
                onClick={handleLogout}
            />
        </>
    );
};

export default AuthorizedButton;
