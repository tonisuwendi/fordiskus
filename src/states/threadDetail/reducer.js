import { ActionType } from './action';

const threadDetailReducer = (threadDetail = null, action = {}) => {
    switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
        return action.payload.threadDetail;
    case ActionType.VOTE_THREAD_DETAIL:
        return {
            ...threadDetail,
            ...(action.payload.action === 'up' && {
                downVotesBy: threadDetail.downVotesBy.filter((vote) => vote !== action.payload.userId),
                upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
            }),
            ...(action.payload.action === 'down' && {
                upVotesBy: threadDetail.upVotesBy.filter((vote) => vote !== action.payload.userId),
                downVotesBy: [...threadDetail.downVotesBy, action.payload.userId],
            }),
            ...(action.payload.action === 'neutral' && {
                upVotesBy: threadDetail.upVotesBy.filter((vote) => vote !== action.payload.userId),
                downVotesBy: threadDetail.downVotesBy.filter((vote) => vote !== action.payload.userId),
            }),
        };
    case ActionType.CREATE_COMMENT:
        return {
            ...threadDetail,
            comments: [action.payload.comment, ...threadDetail.comments],
        };
    case ActionType.VOTE_COMMENT:
        return {
            ...threadDetail,
            comments: threadDetail.comments.map((comment) => {
                if (comment.id === action.payload.commentId) {
                    return {
                        ...comment,
                        ...(action.payload.action === 'up' && {
                            downVotesBy: comment.downVotesBy.filter((vote) => vote !== action.payload.userId),
                            upVotesBy: [...comment.upVotesBy, action.payload.userId],
                        }),
                        ...(action.payload.action === 'down' && {
                            upVotesBy: comment.upVotesBy.filter((vote) => vote !== action.payload.userId),
                            downVotesBy: [...comment.downVotesBy, action.payload.userId],
                        }),
                        ...(action.payload.action === 'neutral' && {
                            upVotesBy: comment.upVotesBy.filter((vote) => vote !== action.payload.userId),
                            downVotesBy: comment.downVotesBy.filter((vote) => vote !== action.payload.userId),
                        }),
                    };
                }
                return comment;
            }),
        };
    default:
        return threadDetail;
    }
};

export default threadDetailReducer;
