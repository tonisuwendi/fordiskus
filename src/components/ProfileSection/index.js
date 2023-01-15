import React from 'react';
import { useSelector } from 'react-redux';

import { findMyScore } from '../../utils';

const ProfileSection = () => {
    const { authUser, leaderboards } = useSelector((states) => states);

    const myScore = findMyScore(authUser.id, leaderboards);

    return (
        <div className="section-content profile-section">
            <img className="profile-photo" src={authUser.avatar} alt="user" />
            <h4 className="profile-name">{authUser.name}</h4>
            <p className="profile-score">{`Skor: ${myScore}`}</p>
        </div>
    );
};

export default ProfileSection;
