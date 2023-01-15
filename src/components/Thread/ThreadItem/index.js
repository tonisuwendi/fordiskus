import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import ThreadContent from './Content';
import ThreadHeader from './Header';
import ButtonAction from '../../ButtonAction';
import { asyncVoteThread } from '../../../states/threads/action';

const ThreadItem = ({ isDetail, user, thread }) => {
    const dispatch = useDispatch();

    const handleVote = ({ currentVote, action }) => {
        dispatch(asyncVoteThread({
            isDetail,
            action,
            current: currentVote,
            threadId: thread.id,
        }));
    };

    return (
        <div className="thread-item section-content">
            <ThreadHeader
                avatar={user.avatar}
                name={user.name}
                date={thread.createdAt}
            />
            <ThreadContent
                isDetail={isDetail}
                id={thread.id}
                title={thread.title}
                body={thread.body}
                category={thread.category}
            />
            <ButtonAction
                showComment={!isDetail}
                id={thread.id}
                upVotesBy={thread.upVotesBy}
                downVotesBy={thread.downVotesBy}
                commentLength={isDetail ? thread.comments.length : thread.totalComments}
                onVote={handleVote}
            />
        </div>
    );
};

ThreadItem.propTypes = {
    isDetail: PropTypes.bool,
    user: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
    }),
    thread: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        createdAt: PropTypes.string,
        upVotesBy: PropTypes.arrayOf(PropTypes.string),
        downVotesBy: PropTypes.arrayOf(PropTypes.string),
        totalComments: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

ThreadItem.defaultProps = {
    isDetail: false,
    user: {
        avatar: '',
        name: '',
    },
    thread: {
        id: '',
        title: '',
        body: '',
        category: '',
        createdAt: '',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
        comments: [],
    },
};

export default ThreadItem;
