import React from 'react';
import { useSelector } from 'react-redux';

import LeaderboardItem from '../components/Leaderboard/Item';

const Leaderboards = () => {
    const { leaderboards } = useSelector((states) => states);

    return (
        <div className="leaderboards-container">
            <h2 className="section-title">Top Pengguna</h2>
            <div className="leaderboard-list section-content">
                {leaderboards.map(({ user, score }) => (
                    <LeaderboardItem
                        key={user.id}
                        avatar={user.avatar}
                        name={user.name}
                        score={score}
                    />
                ))}
            </div>
        </div>
    );
};

export default Leaderboards;
