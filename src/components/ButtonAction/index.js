import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import {
    asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread,
} from '../../states/threads/action';

const ButtonAction = ({
    showComment, threadId, upVotesBy, downVotesBy, commentLength,
}) => {
    const dispatch = useDispatch();
    const { authUser } = useSelector((states) => states);

    const isUpVoted = authUser ? upVotesBy.includes(authUser.id) : false;
    const isDownVoted = authUser ? downVotesBy.includes(authUser.id) : false;

    const handleUpVote = () => {
        if (isUpVoted) dispatch(asyncNeutralVoteThread({ threadId, type: 'up' }));
        else dispatch(asyncUpVoteThread(threadId));
    };

    const handleDownVote = () => {
        if (isDownVoted) dispatch(asyncNeutralVoteThread({ threadId, type: 'down' }));
        else dispatch(asyncDownVoteThread(threadId));
    };

    return (
        <div className="thread__action">
            <Button
                type="like"
                amount={upVotesBy.length}
                isActive={isUpVoted}
                onClick={handleUpVote}
            />
            <Button
                type="dislike"
                amount={downVotesBy.length}
                isActive={isDownVoted}
                onClick={handleDownVote}
            />
            {showComment && (
                <Link to="/thread/aokwokw">
                    <Button type="comment" amount={commentLength} />
                </Link>
            )}
        </div>
    );
};

ButtonAction.propTypes = {
    showComment: PropTypes.bool.isRequired,
    threadId: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    commentLength: PropTypes.number.isRequired,
};

export default ButtonAction;
