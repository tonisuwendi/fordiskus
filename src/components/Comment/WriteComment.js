import React from 'react';
import { useSelector } from 'react-redux';

import FormComment from './FormComment';
import LogoutContent from './LogoutContent';
import { WriteCommentStyled } from './styled';

const WriteComment = () => {
    const { authUser } = useSelector((states) => states);

    return (
        <WriteCommentStyled>
            {authUser ? <FormComment /> : <LogoutContent />}
        </WriteCommentStyled>
    );
};

export default WriteComment;
