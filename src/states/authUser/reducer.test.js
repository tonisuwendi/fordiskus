/**
 * test scenario for authUserReducer
 *
 * - authUserReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER action
*/

import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = [];
        const action = { type: 'unknown' };
        const nextState = authUserReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return the authUser when given by SET_AUTH_USER action', () => {
        const initialState = [];
        const action = {
            type: ActionType.SET_AUTH_USER,
            payload: {
                authUser: {
                    id: 'user-1',
                    name: 'Toni Suwendi',
                    email: 'toni@mail.com',
                    avatar: 'https://domain.com/photo?id=user-1',
                },
            },
        };
        const nextState = authUserReducer(initialState, action);
        expect(nextState).toEqual(action.payload.authUser);
    });

    it('should return null when given by UNSET_AUTH_USER action', () => {
        const initialState = [];
        const action = { type: ActionType.UNSET_AUTH_USER };
        const nextState = authUserReducer(initialState, action);
        expect(nextState).toBeNull();
    });
});
