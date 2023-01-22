import React, { useEffect } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import LeaderboardItem from '../../components/Leaderboard/Item';
import SkeletonLeaderboards from '../../components/Skeleton/Leaderboards';
import { asyncReceiveLeaderboards } from '../../states/leaderboards/action';
import { LeaderboardList, LeaderboardsContainer, LeaderboardTitle } from './styled';

const Leaderboards = () => {
    const dispatch = useDispatch();
    const { leaderboards, loading } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncReceiveLeaderboards());
    }, [dispatch]);

    return (
        <LeaderboardsContainer>
            <LeaderboardTitle>
                <AiFillFire />
                Top Pengguna
            </LeaderboardTitle>
            <LeaderboardList>
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
            </LeaderboardList>
        </LeaderboardsContainer>
    );
};

export default Leaderboards;
