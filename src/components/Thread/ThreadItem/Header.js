import React from 'react';
import PropTypes from 'prop-types';

import { dateTimeAgo } from '../../../utils';
import {
    ThreadHeaderDate,
    ThreadHeaderName,
    ThreadHeaderPhoto,
    ThreadHeaderStyled,
} from '../styled';

const ThreadHeader = ({
    isDetail, avatar, name, date,
}) => (
    <ThreadHeaderStyled>
        <ThreadHeaderPhoto isDetail={isDetail} src={avatar} alt="user" />
        <div>
            <ThreadHeaderName isDetail={isDetail}>{name}</ThreadHeaderName>
            <ThreadHeaderDate>{dateTimeAgo(new Date(date))}</ThreadHeaderDate>
        </div>
    </ThreadHeaderStyled>
);

ThreadHeader.propTypes = {
    isDetail: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ThreadHeader;
