import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button';
import { WriteCommentLogout } from './styled';

const LogoutContent = () => {
    const { threadDetail } = useSelector((states) => states);

    return (
        <>
            <WriteCommentLogout>Kamu harus login dulu untuk memberikan komentar</WriteCommentLogout>
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
