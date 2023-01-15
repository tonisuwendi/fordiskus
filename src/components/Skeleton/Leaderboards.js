import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LeaderboardItem = () => (
    <div className="leaderboard-item">
        <div className="leaderboard-user">
            <Skeleton width={30} height={30} borderRadius={15} />
            <Skeleton width={100} height={18} />
        </div>
        <Skeleton width={25} height={20} />
    </div>
);

const SkeletonLeaderboards = () => (
    <div className="leaderboard-list">
        <LeaderboardItem />
        <LeaderboardItem />
        <LeaderboardItem />
    </div>
);

export default SkeletonLeaderboards;
