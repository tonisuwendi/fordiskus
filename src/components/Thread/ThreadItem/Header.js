import React from 'react';
import PropTypes from 'prop-types';

import { dateTimeAgo } from '../../../utils';

const ThreadHeader = ({ avatar, name, date }) => (
    <div className="thread__header">
        <img className="thread__header-photo" src={avatar} alt="user" />
        <div className="thread__header__content">
            <p className="thread__header-name">{name}</p>
            <small className="thread__header-date">{dateTimeAgo(date)}</small>
        </div>
    </div>
);

ThreadHeader.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ThreadHeader;
