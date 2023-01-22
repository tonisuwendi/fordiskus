import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { ThreadAction } from '../ButtonAction/styled';
import {
    ThreadContentBody,
    ThreadContentTitle,
    ThreadHeaderStyled,
    ThreadItemStyled,
    ThreadsContainer,
} from '../Thread/styled';

const ThreadItem = () => (
    <ThreadItemStyled>
        <ThreadHeaderStyled>
            <Skeleton width={35} height={35} borderRadius={20} />
            <Skeleton width={130} />
            <Skeleton width={100} />
        </ThreadHeaderStyled>
        <ThreadContentTitle style={{ width: '70%' }}>
            <Skeleton height={22} />
        </ThreadContentTitle>
        <ThreadContentBody>
            <Skeleton height={16} style={{ margin: '6px 0 4px 0' }} />
            <Skeleton height={16} width={200} />
        </ThreadContentBody>
        <Skeleton height={28} width={80} borderRadius={8} style={{ marginTop: 10 }} />
        <ThreadAction>
            <Skeleton width={70} height={32} />
            <Skeleton width={70} height={32} />
            <Skeleton width={70} height={32} />
        </ThreadAction>
    </ThreadItemStyled>
);

const SkeletonThreads = () => (
    <ThreadsContainer>
        <ThreadItem />
        <ThreadItem />
    </ThreadsContainer>
);

export default SkeletonThreads;
