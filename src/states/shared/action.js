import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { threadsLoadingActionCreator } from '../loading/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
    dispatch(showLoading());
    dispatch(threadsLoadingActionCreator(true));
    try {
        const users = await fetchApi.getAllUsers();
        const threads = await fetchApi.getAllThreads();
        dispatch(receiveUsersActionCreator(users));
        dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(hideLoading());
        dispatch(threadsLoadingActionCreator(false));
    }
};

export { asyncPopulateUsersAndThreads };
