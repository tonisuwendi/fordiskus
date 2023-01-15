import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';

const ActionType = {
    RECEIVE_LEADERBOARS: 'RECEIVE_LEADERBOARS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
    type: ActionType.RECEIVE_LEADERBOARS,
    payload: { leaderboards },
});

const asyncReveciveLeaderboards = () => async (dispatch) => {
    try {
        const leaderboards = await fetchApi.seeLeaderboards();
        dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
        toast.error(error.message);
    }
};

export {
    ActionType,
    asyncReveciveLeaderboards,
};
