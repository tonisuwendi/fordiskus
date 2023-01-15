import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button';

const LogoutContent = () => {
    const { threadDetail } = useSelector((states) => states);

    return (
        <>
            <p className="write-comment-logout">Kamu harus login dulu untuk memberikan komentar</p>
            <Link to={`/login?redirect=/thread/${threadDetail.id}`}>
                <Button
                    label="Login Sekarang"
                    size="small"
                />
            </Link>
        </>
    );
};

export default LogoutContent;
