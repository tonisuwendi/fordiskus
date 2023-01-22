import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from './Button';
import { ThreadAction } from './styled';

const ButtonAction = ({
    showComment, id, upVotesBy, downVotesBy, commentLength, onVote,
}) => {
    const { authUser } = useSelector((states) => states);

    const isUpVoted = authUser ? upVotesBy.includes(authUser.id) : false;
    const isDownVoted = authUser ? downVotesBy.includes(authUser.id) : false;

    let currentVote = 'neutral';
    if (isUpVoted) currentVote = 'up';
    else if (isDownVoted) currentVote = 'down';

    const handleUpVote = () => onVote({ currentVote, action: isUpVoted ? 'neutral' : 'up' });

    const handleDownVote = () => onVote({ currentVote, action: isDownVoted ? 'neutral' : 'down' });

    return (
        <ThreadAction>
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
                <Link to={`/thread/${id}`}>
                    <Button type="comment" amount={commentLength} />
                </Link>
            )}
        </ThreadAction>
    );
};

ButtonAction.propTypes = {
    id: PropTypes.string,
    showComment: PropTypes.bool,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    commentLength: PropTypes.number.isRequired,
    onVote: PropTypes.func.isRequired,
};

ButtonAction.defaultProps = {
    id: '',
    showComment: false,
};

export default ButtonAction;
