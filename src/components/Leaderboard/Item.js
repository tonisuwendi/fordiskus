import React from 'react';

const LeaderboardItem = () => (
    <div className="leaderboard-item">
        <div className="leaderboard-user">
            <img className="leaderboard-photo" src="https://id-static.z-dn.net/files/d39/41834b86159e993dc59c8f2bcf764fd3.jpg" alt="user" />
            <p className="leaderboard-name">Paijo Subejo</p>
        </div>
        <p className="leaderboard-score">320</p>
    </div>
);

export default LeaderboardItem;
