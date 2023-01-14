import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import LeaderboardItem from './Item';

const Leaderboard = () => (
    <div className="section-content leaderboard-section">
        <h3 className="section-title">Top 3 Terbaik</h3>
        <div className="leaderboard-list">
            <LeaderboardItem />
            <LeaderboardItem />
            <LeaderboardItem />
        </div>
        <div className="leaderboard-more">
            <Link to="/leaderboards">
                <Button label="Lihat Semua" variant="outline" size="small" />
            </Link>
        </div>
    </div>
);

export default Leaderboard;
