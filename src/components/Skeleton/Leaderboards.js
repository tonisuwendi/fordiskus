import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { LeaderboardItemStyled, LeaderboardList, LeaderboardUser } from '../Leaderboard/styled';

const LeaderboardItem = () => (
    <LeaderboardItemStyled>
        <LeaderboardUser>
            <Skeleton width={30} height={30} borderRadius={15} />
            <Skeleton width={100} height={18} />
        </LeaderboardUser>
        <Skeleton width={25} height={20} />
    </LeaderboardItemStyled>
);

const SkeletonLeaderboards = () => (
    <LeaderboardList>
        <LeaderboardItem />
        <LeaderboardItem />
        <LeaderboardItem />
    </LeaderboardList>
);

export default SkeletonLeaderboards;
