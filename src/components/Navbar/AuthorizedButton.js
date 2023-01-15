import React from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

const AuthorizedButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(asyncUnsetAuthUser());
    };

    return (
        <>
            <Link to="/new">
                <Button label="Buat Diskusi" />
            </Link>
            <Button
                label="Keluar"
                variant="outline-danger"
                rightIcon={<RiLogoutCircleRLine />}
                onClick={handleLogout}
            />
        </>
    );
};

export default AuthorizedButton;
