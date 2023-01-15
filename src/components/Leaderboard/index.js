import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button';
import LeaderboardItem from './Item';

const Leaderboard = () => {
    const { leaderboards } = useSelector((states) => states);

    return (
        <div className="section-content leaderboard-section">
            <h3 className="section-title">Top 3 Terbaik</h3>
            <div className="leaderboard-list">
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
            </div>
            <div className="leaderboard-more">
                <Link to="/leaderboards">
                    <Button label="Lihat Semua" variant="outline" size="small" />
                </Link>
            </div>
        </div>
    );
};

export default Leaderboard;
