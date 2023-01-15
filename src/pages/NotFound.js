import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import notFoundImage from '../images/404.svg';

const NotFound = () => (
    <div className="not-found">
        <img
            src={notFoundImage}
            alt="not found"
            className="not-found-image"
        />
        <h3 className="not-found-text">
            Upps, sepertinya kamu tersesat
        </h3>
        <Link to="/">
            <Button label="Kembali ke Rumah" />
        </Link>
    </div>
);

export default NotFound;
