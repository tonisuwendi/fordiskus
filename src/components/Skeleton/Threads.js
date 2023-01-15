import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ThreadItem = () => (
    <div className="thread-item section-content">
        <div className="thread__header">
            <Skeleton width={35} height={35} borderRadius={20} />
            <div className="thread__header__content">
                <Skeleton width={130} />
                <Skeleton width={100} />
            </div>
        </div>
        <div className="thread__content-title" style={{ width: '70%' }}>
            <Skeleton height={22} />
        </div>
        <div className="thread__content-body">
            <Skeleton height={16} style={{ margin: '6px 0 4px 0' }} />
            <Skeleton height={16} width={200} />
        </div>
        <Skeleton height={28} width={80} borderRadius={8} style={{ marginTop: 10 }} />
        <div className="thread__action">
            <Skeleton width={70} height={32} />
            <Skeleton width={70} height={32} />
            <Skeleton width={70} height={32} />
        </div>
    </div>
);

const SkeletonThreads = () => (
    <div className="threads">
        <ThreadItem />
        <ThreadItem />
    </div>
);

export default SkeletonThreads;
