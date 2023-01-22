import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { ThreadAction } from '../ButtonAction/styled';
import {
    CommentHeaderStyled,
    CommentHeaderUser,
    ListCommentsContent,
    ListCommentsStyled,
    WriteCommentStyled,
} from '../Comment/styled';
import {
    ThreadContentBody,
    ThreadContentTitle,
    ThreadDetailContent,
    ThreadHeaderStyled,
    ThreadItemStyled,
} from '../Thread/styled';

const Thread = () => (
    <ThreadItemStyled>
        <ThreadHeaderStyled>
            <Skeleton width={35} height={35} borderRadius={20} />
            <div>
                <Skeleton width={130} />
                <Skeleton width={100} />
            </div>
        </ThreadHeaderStyled>
        <ThreadContentTitle style={{ width: '90%' }}>
            <Skeleton height={30} />
        </ThreadContentTitle>
        <ThreadContentBody>
            <Skeleton height={20} style={{ margin: '6px 0 4px 0' }} />
            <Skeleton height={20} width={200} />
        </ThreadContentBody>
        <Skeleton height={32} width={80} borderRadius={8} style={{ marginTop: 10 }} />
        <ThreadAction>
            <Skeleton width={80} height={38} />
            <Skeleton width={80} height={38} />
        </ThreadAction>
    </ThreadItemStyled>
);

const WriteComment = () => (
    <WriteCommentStyled>
        <Skeleton width={180} height={28} />
        <Skeleton height={100} style={{ margin: '12px 0' }} />
        <Skeleton width={120} height={40} />
    </WriteCommentStyled>
);

const CommentItem = () => (
    <>
        <CommentHeaderStyled style={{ marginTop: 15 }}>
            <CommentHeaderUser>
                <Skeleton width={30} height={30} borderRadius={15} />
                <Skeleton width={120} height={22} />
            </CommentHeaderUser>
            <Skeleton width={100} height={18} />
        </CommentHeaderStyled>
        <Skeleton count={2} />
        <ThreadAction style={{ marginTop: 0 }}>
            <Skeleton width={60} height={30} />
            <Skeleton width={60} height={30} />
        </ThreadAction>
    </>
);

const ListComments = () => (
    <ListCommentsStyled>
        <Skeleton width={150} height={28} />
        <ListCommentsContent>
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </ListCommentsContent>
    </ListCommentsStyled>
);

const SkeletonDetailThread = () => (
    <ThreadDetailContent>
        <Thread />
        <WriteComment />
        <ListComments />
    </ThreadDetailContent>
);

export default SkeletonDetailThread;
