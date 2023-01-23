import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

import { findMyScore } from '../../utils';
import {
    ProfileName, ProfilePhoto, ProfileScore, ProfileSectionStyled,
} from './styled';

const ProfileSection = () => {
    const { authUser, leaderboards, loading } = useSelector((states) => states);

    const myScore = findMyScore(authUser.id, leaderboards);

    return (
        <ProfileSectionStyled>
            <ProfilePhoto src={authUser.avatar} alt="user" />
            <ProfileName data-testid="profile-name">{authUser.name}</ProfileName>
            {loading.leaderboard ? <Skeleton width={50} /> : (
                <ProfileScore data-testid="profile-score">{`Skor: ${myScore}`}</ProfileScore>
            )}
        </ProfileSectionStyled>
    );
};

export default ProfileSection;
