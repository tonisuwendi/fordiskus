import React from 'react';
import PropTypes from 'prop-types';
import ThreadContent from './Content';
import ThreadHeader from './Header';
import ButtonAction from '../../ButtonAction';

const ThreadItem = ({ isDetail, user, thread }) => (
    <div className="thread-item section-content">
        <ThreadHeader
            avatar={user.avatar}
            name={user.name}
            date={thread.createdAt}
        />
        <ThreadContent
            isDetail={isDetail}
            title={thread.title}
            body={thread.body}
            category={thread.category}
        />
        <ButtonAction
            showComment={!isDetail}
            threadId={thread.id}
            upVotesBy={thread.upVotesBy}
            downVotesBy={thread.downVotesBy}
            commentLength={thread.totalComments}
        />
    </div>
);

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
    }),
};

ThreadItem.defaultProps = {
    isDetail: false,
    user: {
        avatar: '',
        name: '',
    },
    thread: {
        title: '',
        body: '',
        category: '',
        createdAt: '',
    },
};

export default ThreadItem;
