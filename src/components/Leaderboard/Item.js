import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardItem = ({ avatar, name, score }) => (
    <div className="leaderboard-item">
        <div className="leaderboard-user">
            <img className="leaderboard-photo" src={avatar} alt="user" />
            <p className="leaderboard-name">{name}</p>
        </div>
        <p className="leaderboard-score">{score}</p>
    </div>
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
