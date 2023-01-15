import { toast } from 'react-toastify';

import fetchApi from '../../utils/fetchApi';
import { buttonLoadingActionCreator } from '../loading/action';

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => ({
    type: ActionType.RECEIVE_USERS,
    payload: { users },
});

const asyncRegisterUser = ({
    name, email, password, navigate,
}) => async (dispatch) => {
    dispatch(buttonLoadingActionCreator(true));
    try {
        await fetchApi.register({ name, email, password });
        toast.success('Pendaftaran berhasil dilakukan');
        navigate('/login');
    } catch (error) {
        toast.error(error.message);
    } finally {
        dispatch(buttonLoadingActionCreator(false));
    }
};

export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
};
