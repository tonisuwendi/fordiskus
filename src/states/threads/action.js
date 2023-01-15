import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { voteThreadDetailActionCreator } from '../threadDetail/action';

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    VOTE_THREAD: 'VOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
});

const voteThreadActionCreator = ({ threadId, action, userId }) => ({
    type: ActionType.VOTE_THREAD,
    payload: {
        threadId,
        action,
        userId,
    },
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

const asyncVoteThread = ({
    isDetail, current, action, threadId,
}) => async (dispatch, getState) => {
    const { authUser } = getState();
    if (!authUser) {
        toast.error('Upss, kamu harus login untuk melakukan vote');
        return;
    }
    const { id: userId } = authUser;
    if (isDetail) dispatch(voteThreadDetailActionCreator({ action, userId }));
    else dispatch(voteThreadActionCreator({ threadId, action, userId }));
    try {
        await fetchApi.voteThread({ threadId, type: action });
    } catch (error) {
        toast.error(error.message);
        if (isDetail) dispatch(voteThreadDetailActionCreator({ action: current, userId }));
        else dispatch(voteThreadActionCreator({ threadId, action: current, userId }));
    }
};

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncCreateThread,
    asyncVoteThread,
};
