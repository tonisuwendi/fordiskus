import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Thread = () => (
    <div className="thread-item section-content">
        <div className="thread__header">
            <Skeleton width={35} height={35} borderRadius={20} />
            <div className="thread__header__content">
                <Skeleton width={130} />
                <Skeleton width={100} />
            </div>
        </div>
        <div className="thread__content-title" style={{ width: '90%' }}>
            <Skeleton height={30} />
        </div>
        <div className="thread__content-body">
            <Skeleton height={20} style={{ margin: '6px 0 4px 0' }} />
            <Skeleton height={20} width={200} />
        </div>
        <Skeleton height={32} width={80} borderRadius={8} style={{ marginTop: 10 }} />
        <div className="thread__action">
            <Skeleton width={80} height={38} />
            <Skeleton width={80} height={38} />
        </div>
    </div>
);

const WriteComment = () => (
    <div className="write-comment section-content">
        <Skeleton width={180} height={28} />
        <Skeleton height={100} style={{ margin: '12px 0' }} />
        <Skeleton width={120} height={40} />
    </div>
);

const CommentItem = () => (
    <>
        <div className="comment__header" style={{ marginTop: 15 }}>
            <div className="comment__header-user">
                <Skeleton width={30} height={30} borderRadius={15} />
                <Skeleton width={120} height={22} />
            </div>
            <Skeleton width={100} height={18} />
        </div>
        <Skeleton count={2} />
        <div className="thread__action" style={{ marginTop: 0 }}>
            <Skeleton width={60} height={30} />
            <Skeleton width={60} height={30} />
        </div>
    </>
);

const ListComments = () => (
    <div className="section-content list-comments">
        <Skeleton width={150} height={28} />
        <div className="list-comments-content">
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    </div>
);

const SkeletonDetailThread = () => (
    <div className="detail-content">
        <Thread />
        <WriteComment />
        <ListComments />
    </div>
);

export default SkeletonDetailThread;
