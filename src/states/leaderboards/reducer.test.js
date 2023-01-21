/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return leaderboards when given by RECEIVE_LEADERBOARS action
*/

import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducers function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = false;
        const action = { type: 'unknown' };
        const nextState = leaderboardsReducer(initialState, action);
        expect(nextState).toEqual(initialState);
    });

    it('should return leaderboards when given by RECEIVE_LEADERBOARS action', () => {
        const initialState = [];
        const action = {
            type: ActionType.RECEIVE_LEADERBOARS,
            payload: {
                leaderboards: [
                    {
                        user: {
                            id: 'user-1',
                            name: 'Toni Suwendi',
                            email: 'toni@mail.com',
                            avatar: 'https://domain.com/photo?id=user-1',
                        },
                        score: 26000,
                    },
                    {
                        user: {
                            id: 'user-2',
                            name: 'Shani Indira Natio',
                            email: 'shani@mail.com',
                            avatar: 'https://domain.com/photo?id=user-2',
                        },
                        score: 23500,
                    },
                ],
            },
        };
        const nextState = leaderboardsReducer(initialState, action);
        expect(nextState).toEqual(action.payload.leaderboards);
    });
});
