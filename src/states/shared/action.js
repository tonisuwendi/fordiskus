import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateUsersAndThreads = () => async (dispatch) => {
    try {
        const users = await fetchApi.getAllUsers();
        const threads = await fetchApi.getAllThreads();
        dispatch(receiveUsersActionCreator(users));
        dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
        toast.error(error.message);
    }
};

export { asyncPopulateUsersAndThreads };
