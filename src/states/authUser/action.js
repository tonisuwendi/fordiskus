import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { putAccessToken } from '../../utils';

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
    try {
        const token = await fetchApi.login({ email, password });
        putAccessToken(token);
        const authUser = await fetchApi.getOwnProfile();
        dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
        toast.error(error.message);
    }
};

const asyncUnsetAuthUser = () => async (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    putAccessToken('');
};

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
};
