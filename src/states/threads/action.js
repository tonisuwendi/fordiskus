import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    UPVOTE_THREAD: 'UPVOTE_THREAD',
    DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
    NEUTRALVOTE_THREAD: 'NEUTRALVOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
});

const upVoteThreadActionCreator = ({ threadId, userId }) => ({
    type: ActionType.UPVOTE_THREAD,
    payload: { threadId, userId },
});

const downVoteThreadActionCreator = ({ threadId, userId }) => ({
    type: ActionType.DOWNVOTE_THREAD,
    payload: { threadId, userId },
});

const neutralVoteThreadActionCreator = ({ threadId, userId }) => ({
    type: ActionType.NEUTRALVOTE_THREAD,
    payload: { threadId, userId },
});

const asyncCreateThread = ({
    title, category, body, navigate,
}) => async () => {
    try {
        const talk = await fetchApi.createThread({ title, category, body });
        toast.success('Berhasil membuat diskusi');
        navigate(`/thread/${talk.id}`);
    } catch (error) {
        toast.error(error.message);
    }
};

const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
        await fetchApi.voteThread({ threadId, type: 'up' });
    } catch (error) {
        toast.error(error.message);
        dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
};

const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
        await fetchApi.voteThread({ threadId, type: 'down' });
    } catch (error) {
        toast.error(error.message);
        dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
};

const asyncNeutralVoteThread = ({ threadId, type }) => async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
        await fetchApi.voteThread({ threadId, type: 'neutral' });
    } catch (error) {
        toast.error(error.message);
        if (type === 'up') dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
        else dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
};

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncCreateThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralVoteThread,
};
