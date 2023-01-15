import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

const UnauthorizedButton = () => (
    <>
        <Link to="/register">
            <Button label="Daftar" variant="outline" />
        </Link>
        <Link to="/login">
            <Button label="Masuk" />
        </Link>
    </>
);

export default UnauthorizedButton;
