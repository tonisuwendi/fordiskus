import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { asyncReceiveLeaderboards } from '../leaderboards/action';
import { buttonLoadingActionCreator, detailThreadLoadingActionCreator } from '../loading/action';

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
    dispatch(showLoading());
    dispatch(detailThreadLoadingActionCreator(true));
    try {
        const threadDetail = await fetchApi.getDetailThread(threadId);
        dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
        const { message } = error;
        if (message !== 'thread tidak ditemukan') toast.error(message);
    } finally {
        dispatch(hideLoading());
        dispatch(detailThreadLoadingActionCreator(false));
    }
};

const asyncCreateComment = ({ threadId, content, onSuccess }) => async (dispatch) => {
    dispatch(buttonLoadingActionCreator(true));
    try {
        const comment = await fetchApi.createComment({ threadId, content });
        toast.success('Berhasil memberikan komentar');
        dispatch(createCommentActionCreator(comment));
        dispatch(asyncReceiveLeaderboards());
        if (onSuccess) onSuccess();
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(buttonLoadingActionCreator(false));
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
        dispatch(asyncReceiveLeaderboards());
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
