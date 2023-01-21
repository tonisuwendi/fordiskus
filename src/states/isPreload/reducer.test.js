/**
 * test scenario for isPreloadReducer
 *
 * - isPreloadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return isPreload when given by SET_IS_PRELOAD action
*/

import isPreloadReducer from './reducer';
import { ActionType } from './action';

describe('isPreloadReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = false;
        const action = { type: 'unknown' };
        const nextState = isPreloadReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return isPreload when given by SET_IS_PRELOAD action', () => {
        const initialState = true;
        const action = {
            type: ActionType.SET_IS_PRELOAD,
            payload: { isPreload: false },
        };
        const nextState = isPreloadReducer(initialState, action);
        expect(nextState).toEqual(action.payload.isPreload);
    });
});
