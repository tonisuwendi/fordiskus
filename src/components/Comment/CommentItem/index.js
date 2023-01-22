/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAction from '../../ButtonAction';
import CommentHeader from './Header';
import { asyncVoteComment } from '../../../states/threadDetail/action';
import { CommentBody, CommentItemStyled } from '../styled';

const CommentItem = ({
    id, content, createdAt, upVotesBy, downVotesBy, owner,
}) => {
    const dispatch = useDispatch();
    const { threadDetail } = useSelector((states) => states);

    const handleVote = ({ currentVote, action }) => {
        dispatch(asyncVoteComment({
            threadId: threadDetail.id,
            commentId: id,
            current: currentVote,
            action,
        }));
    };

    return (
        <CommentItemStyled>
            <CommentHeader
                avatar={owner.avatar}
                name={owner.name}
                date={createdAt}
            />
            <CommentBody dangerouslySetInnerHTML={{ __html: content }} />
            <ButtonAction
                upVotesBy={upVotesBy}
                downVotesBy={downVotesBy}
                commentLength={0}
                onVote={handleVote}
            />
        </CommentItemStyled>
    );
};

CommentItem.propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    upVotesBy: PropTypes.arrayOf(PropTypes.string),
    downVotesBy: PropTypes.arrayOf(PropTypes.string),
    owner: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
    }),
};

CommentItem.defaultProps = {
    id: '',
    content: '',
    createdAt: '',
    upVotesBy: [],
    downVotesBy: [],
    owner: {
        avatar: '',
        name: '',
    },
};

export default CommentItem;
