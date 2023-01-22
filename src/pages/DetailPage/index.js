import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Leaderboard from '../../components/Leaderboard';
import ThreadItem from '../../components/Thread/ThreadItem';
import WriteComment from '../../components/Comment/WriteComment';
import ListComments from '../../components/Comment/ListComments';
import SkeletonDetailThread from '../../components/Skeleton/DetailThread';
import NotFound from '../NotFound';
import { asyncReceiveThreadDetail } from '../../states/threadDetail/action';
import { asyncReceiveLeaderboards } from '../../states/leaderboards/action';
import { DetailContainer, DetailContent, DetailLeaderboards } from './styled';

const DetailPage = () => {
    const dispatch = useDispatch();
    const { threadDetail, loading } = useSelector((states) => states);

    const { threadId } = useParams();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(threadId));
        dispatch(asyncReceiveLeaderboards());
    }, [dispatch, threadId]);

    if (!loading.detailThread && !threadDetail) return <NotFound />;

    return (
        <DetailContainer>
            {loading.detailThread ? <SkeletonDetailThread /> : (
                <DetailContent>
                    <ThreadItem
                        isDetail
                        thread={threadDetail}
                        user={threadDetail.owner}
                    />
                    <WriteComment />
                    {threadDetail.comments.length > 0 && (
                        <ListComments comments={threadDetail.comments} />
                    )}
                </DetailContent>
            )}
            <DetailLeaderboards>
                <Leaderboard />
            </DetailLeaderboards>
        </DetailContainer>
    );
};

export default DetailPage;
