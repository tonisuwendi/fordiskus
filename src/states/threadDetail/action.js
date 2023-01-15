import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    VOTE_THREAD_DETAIL: 'VOTE_THREAD_DETAIL',
    CREATE_COMMENT: 'CREATE_COMMENT',
    VOTE_COMMENT: 'VOTE_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: { threadDetail },
});

const voteThreadDetailActionCreator = ({ action, userId }) => ({
    type: ActionType.VOTE_THREAD_DETAIL,
    payload: { action, userId },
});

const createCommentActionCreator = (comment) => ({
    type: ActionType.CREATE_COMMENT,
    payload: { comment },
});

const voteCommentActionCreator = ({ action, userId, commentId }) => ({
    type: ActionType.VOTE_COMMENT,
    payload: {
        action,
        userId,
        commentId,
    },
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
    try {
        const threadDetail = await fetchApi.getDetailThread(threadId);
        dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
        toast.error(error.message);
    }
};

const asyncCreateComment = ({ threadId, content, onSuccess }) => async (dispatch) => {
    try {
        const comment = await fetchApi.createComment({ threadId, content });
        toast.success('Berhasil memberikan komentar');
        dispatch(createCommentActionCreator(comment));
        if (onSuccess) onSuccess();
    } catch (error) {
        toast.error(error.message);
    }
};

const asyncVoteComment = ({
    threadId, commentId, current, action,
}) => async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
        toast.error('Upss, kamu harus login untuk melakukan vote');
        return;
    }
    const { id: userId } = authUser;
    dispatch(voteCommentActionCreator({ action, userId, commentId }));
    try {
        await fetchApi.voteComment({ threadId, commentId, type: action });
    } catch (error) {
        toast.error(error.message);
        dispatch(voteCommentActionCreator({ action: current, userId, commentId }));
    }
};

export {
    ActionType,
    voteThreadDetailActionCreator,
    asyncReceiveThreadDetail,
    asyncCreateComment,
    asyncVoteComment,
};
