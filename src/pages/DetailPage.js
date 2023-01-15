import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Leaderboard from '../components/Leaderboard';
import ThreadItem from '../components/Thread/ThreadItem';
import WriteComment from '../components/Comment/WriteComment';
import ListComments from '../components/Comment/ListComments';
import NotFound from './NotFound';
import SkeletonDetailThread from '../components/Skeleton/DetailThread';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

const DetailPage = () => {
    const dispatch = useDispatch();
    const { threadDetail, loading } = useSelector((states) => states);

    const { threadId } = useParams();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(threadId));
        dispatch(asyncReceiveLeaderboards());
    }, [dispatch]);

    if (!loading.detailThread && !threadDetail) return <NotFound />;

    return (
        <div className="detail-container">
            {loading.detailThread ? <SkeletonDetailThread /> : (
                <div className="detail-content">
                    <ThreadItem
                        isDetail
                        thread={threadDetail}
                        user={threadDetail.owner}
                    />
                    <WriteComment />
                    {threadDetail.comments.length > 0 && (
                        <ListComments comments={threadDetail.comments} />
                    )}
                </div>
            )}
            <div className="detail-leaderboards">
                <Leaderboard />
            </div>
        </div>
    );
};

export default DetailPage;
