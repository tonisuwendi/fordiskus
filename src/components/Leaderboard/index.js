import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button';
import SkeletonLeaderboards from '../Skeleton/Leaderboards';
import LeaderboardItem from './Item';
import {
    LeaderboardList,
    LeaderboardMore,
    LeaderboardSection,
    LeaderboardTitle,
} from './styled';

const Leaderboard = () => {
    const { leaderboards, loading } = useSelector((states) => states);

    return (
        <LeaderboardSection>
            <LeaderboardTitle>
                <AiFillFire />
                Top 3 Terbaik
            </LeaderboardTitle>
            {loading.leaderboard ? <SkeletonLeaderboards /> : (
                <>
                    <LeaderboardList>
                        {leaderboards.map((leaderboard, index) => {
                            if (index < 3) {
                                const { user, score } = leaderboard;
                                return (
                                    <LeaderboardItem
                                        key={user.id}
                                        avatar={user.avatar}
                                        name={user.name}
                                        score={score}
                                    />
                                );
                            }
                            return null;
                        })}
                    </LeaderboardList>
                    <LeaderboardMore>
                        <Link to="/leaderboards">
                            <Button label="Lihat Semua" variant="outline" size="small" />
                        </Link>
                    </LeaderboardMore>
                </>
            )}
        </LeaderboardSection>
    );
};

export default Leaderboard;
