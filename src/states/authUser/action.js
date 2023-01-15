import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { putAccessToken } from '../../utils';
import { buttonLoadingActionCreator } from '../loading/action';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
    type: ActionType.SET_AUTH_USER,
    payload: { authUser },
});

const unsetAuthUserActionCreator = () => ({
    type: ActionType.UNSET_AUTH_USER,
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
    dispatch(buttonLoadingActionCreator(true));
    try {
        const token = await fetchApi.login({ email, password });
        putAccessToken(token);
        const authUser = await fetchApi.getOwnProfile();
        dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(buttonLoadingActionCreator(false));
    }
};

const asyncUnsetAuthUser = () => async (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    putAccessToken('');
};

export {
    ActionType,
    setAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
};
