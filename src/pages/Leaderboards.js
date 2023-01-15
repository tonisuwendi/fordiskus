import React, { useEffect } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import LeaderboardItem from '../components/Leaderboard/Item';
import SkeletonLeaderboards from '../components/Skeleton/Leaderboards';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

const Leaderboards = () => {
    const dispatch = useDispatch();
    const { leaderboards, loading } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncReceiveLeaderboards());
    }, [dispatch]);

    return (
        <div className="leaderboards-container">
            <h2 className="section-title leaderboard-title">
                <AiFillFire />
                Top Pengguna
            </h2>
            <div className="leaderboard-list section-content">
                {loading.leaderboard ? <SkeletonLeaderboards /> : (
                    leaderboards.map(({ user, score }) => (
                        <LeaderboardItem
                            key={user.id}
                            avatar={user.avatar}
                            name={user.name}
                            score={score}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Leaderboards;
