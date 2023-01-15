import React from 'react';
import { useSelector } from 'react-redux';

import FormComment from './FormComment';
import LogoutContent from './LogoutContent';

const WriteComment = () => {
    const { authUser } = useSelector((states) => states);

    return (
        <div className="write-comment section-content">
            {authUser ? <FormComment /> : <LogoutContent />}
        </div>
    );
};

export default WriteComment;
