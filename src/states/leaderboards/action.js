import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { leaderboardsLoadingActionCreator } from '../loading/action';

const ActionType = {
    RECEIVE_LEADERBOARDS: 'leaderboards/receive',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: { leaderboards },
});

const asyncReceiveLeaderboards = () => async (dispatch) => {
    dispatch(showLoading());
    dispatch(leaderboardsLoadingActionCreator(true));
    try {
        const leaderboards = await fetchApi.seeLeaderboards();
        dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(hideLoading());
        dispatch(leaderboardsLoadingActionCreator(false));
    }
};

export {
    ActionType,
    receiveLeaderboardsActionCreator,
    asyncReceiveLeaderboards,
};
