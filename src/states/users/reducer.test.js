/**
 * test scenario for usersReducer
 *
 * - usersReducers function
 *  - should return the initial state when given by unknown action
 *  - should return users when given by RECEIVE_USERS action
*/

import usersReducer from './reducer';
import { ActionType } from './action';

describe('fiusersReducers functionrst', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = false;
        const action = { type: 'unknown' };
        const nextState = usersReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return users when given by RECEIVE_USERS action', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_USERS,
            payload: {
                users: [
                    {
                        id: 'user-1',
                        name: 'Toni Suwendi',
                        email: 'toni@mail.com',
                        avatar: 'https://domain.com/photo?id=user-1',
                    },
                    {
                        id: 'user-2',
                        name: 'Shani Indira Natio',
                        email: 'shani@mail.com',
                        avatar: 'https://domain.com/photo?id=user-2',
                    },
                ],
            },
        };
        const nextState = usersReducer(initialState, action);
        expect(nextState).toEqual(action.payload.users);
    });
});
