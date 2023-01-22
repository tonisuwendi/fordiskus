import React from 'react';
import PropTypes from 'prop-types';

import { dateTimeAgo } from '../../../utils';
import {
    CommentHeaderDate,
    CommentHeaderName,
    CommentHeaderPhoto,
    CommentHeaderStyled,
    CommentHeaderUser,
} from '../styled';

const CommentHeader = ({ avatar, name, date }) => (
    <CommentHeaderStyled>
        <CommentHeaderUser>
            <CommentHeaderPhoto src={avatar} alt="user" />
            <CommentHeaderName>{name}</CommentHeaderName>
        </CommentHeaderUser>
        <CommentHeaderDate>{dateTimeAgo(new Date(date))}</CommentHeaderDate>
    </CommentHeaderStyled>
);

CommentHeader.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default CommentHeader;
