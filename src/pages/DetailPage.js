import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Leaderboard from '../components/Leaderboard';
import ThreadItem from '../components/Thread/ThreadItem';
import WriteComment from '../components/Comment/WriteComment';
import ListComments from '../components/Comment/ListComments';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPage = () => {
    const dispatch = useDispatch();
    const { threadDetail } = useSelector((states) => states);

    const { threadId } = useParams();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(threadId));
    }, [threadId, dispatch]);

    if (!threadDetail) return <p>loading...</p>;

    return (
        <div className="detail-container">
            <div className="detail-content">
                <ThreadItem
                    isDetail
                    thread={threadDetail}
                    user={threadDetail.owner}
                />
                <WriteComment />
                {!!threadDetail.comments.length && (
                    <ListComments comments={threadDetail.comments} />
                )}
            </div>
            <div className="detail-leaderboards">
                <Leaderboard />
            </div>
        </div>
    );
};

export default DetailPage;
