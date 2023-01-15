import React from 'react';
import PropTypes from 'prop-types';

import { dateTimeAgo } from '../../../utils';

const CommentHeader = ({ avatar, name, date }) => (
    <div className="comment__header">
        <div className="comment__header-user">
            <img className="comment__header-photo" src={avatar} alt="user" />
            <p className="comment__header-name">{name}</p>
        </div>
        <small className="comment__header-date">{dateTimeAgo(new Date(date))}</small>
    </div>
);

CommentHeader.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default CommentHeader;
