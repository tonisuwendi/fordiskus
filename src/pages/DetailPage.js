import React from 'react';

import Leaderboard from '../components/Leaderboard';
import ThreadItem from '../components/Thread/ThreadItem';
import WriteComment from '../components/Comment/WriteComment';
import ListComments from '../components/Comment/ListComments';

const DetailPage = () => (
    <div className="detail-container">
        <div className="detail-content">
            <ThreadItem isDetail />
            <WriteComment />
            <ListComments />
        </div>
        <div className="detail-leaderboards">
            <Leaderboard />
        </div>
    </div>
);

export default DetailPage;
