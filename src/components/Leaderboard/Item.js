import React from 'react';
import PropTypes from 'prop-types';

import {
    LeaderboardItemStyled,
    LeaderboardName,
    LeaderboardPhoto,
    LeaderboardScore,
    LeaderboardUser,
} from './styled';

const LeaderboardItem = ({ avatar, name, score }) => (
    <LeaderboardItemStyled>
        <LeaderboardUser>
            <LeaderboardPhoto src={avatar} alt="user" />
            <LeaderboardName>{name}</LeaderboardName>
        </LeaderboardUser>
        <LeaderboardScore>{score}</LeaderboardScore>
    </LeaderboardItemStyled>
);

LeaderboardItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
};

LeaderboardItem.defaultProps = {
    avatar: '',
    name: '',
    score: 0,
};

export default LeaderboardItem;
