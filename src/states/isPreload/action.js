import fetchApi from '../../utils/fetchApi';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
    SET_IS_PRELOAD: 'isPreload/set',
};

const setIsPreloadActionCreator = (isPreload) => ({
    type: ActionType.SET_IS_PRELOAD,
    payload: { isPreload },
});

const asyncPreloadProccess = () => async (dispatch) => {
    try {
        const authUser = await fetchApi.getOwnProfile();
        dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
        dispatch(setAuthUserActionCreator(null));
    } finally {
        dispatch(setIsPreloadActionCreator(false));
    }
};

export {
    ActionType,
    asyncPreloadProccess,
};
