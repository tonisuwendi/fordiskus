/**
 * test scenario for loadingReducer
 *
 * - loadingReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the loading with the new threads when given by THREADS_LOADING action
 *  - should return the loading with the new detailThread when given by DETAIL_THREAD_LOADING action
 *  - should return the loading with the new leaderboard when given by LEADERBOARDS_LOADING action
 *  - should return the loading with the new button when given by BUTTON_LOADING action
*/

import { ActionType } from './action';
import loadingReducer from './reducer';

describe('loadingReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = {};
        const action = { type: 'unknown' };
        const nextState = loadingReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return the loading with the new threads when given by THREADS_LOADING action', () => {
        const initialState = {};
        const action = {
            type: ActionType.THREADS_LOADING,
            payload: { isLoading: true },
        };
        const nextState = loadingReducer(initialState, action);
        expect(nextState).toEqual({ ...initialState, threads: action.payload.isLoading });
    });

    it('should return the loading with the new detailThread when given by DETAIL_THREAD_LOADING action', () => {
        const initialState = {};
        const action = {
            type: ActionType.DETAIL_THREAD_LOADING,
            payload: { isLoading: true },
        };
        const nextState = loadingReducer(initialState, action);
        expect(nextState).toEqual({ ...initialState, detailThread: action.payload.isLoading });
    });

    it('should return the loading with the new leaderboard when given by LEADERBOARDS_LOADING action', () => {
        const initialState = {};
        const action = {
            type: ActionType.LEADERBOARDS_LOADING,
            payload: { isLoading: true },
        };
        const nextState = loadingReducer(initialState, action);
        expect(nextState).toEqual({ ...initialState, leaderboard: action.payload.isLoading });
    });

    it('should return the loading with the new button when given by BUTTON_LOADING action', () => {
        const initialState = {};
        const action = {
            type: ActionType.BUTTON_LOADING,
            payload: { isLoading: true },
        };
        const nextState = loadingReducer(initialState, action);
        expect(nextState).toEqual({ ...initialState, button: action.payload.isLoading });
    });
});
