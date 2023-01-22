import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { asyncReceiveLeaderboards } from '../leaderboards/action';
import { buttonLoadingActionCreator } from '../loading/action';
import { voteThreadDetailActionCreator } from '../threadDetail/action';

const ActionType = {
    RECEIVE_THREADS: 'threads/receive',
    VOTE_THREAD: 'threads/vote',
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
}) => async (dispatch) => {
    dispatch(buttonLoadingActionCreator(true));
    try {
        const talk = await fetchApi.createThread({ title, category, body });
        toast.success('Berhasil membuat diskusi');
        navigate(`/thread/${talk.id}`);
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(buttonLoadingActionCreator(false));
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
        dispatch(asyncReceiveLeaderboards());
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
