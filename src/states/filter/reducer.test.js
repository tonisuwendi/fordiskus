/**
 * test scenario for filterReducer
 *
 * - filterReducers function
 *  - should return object the initial category and initial searchKeyword when given by unknown action
 *  - should return the filter with the new category when given by CATEGORY_THREADS action
 *  - should return the filter with the new searchKeyword when given by SEARCH_THREADS action
*/

import filterReducer from './reducer';
import { ActionType } from './action';

describe('filterReducers function', () => {
    it('should return object the initial category and initial searchKeyword when given by unknown action', () => {
        const initialState = {};
        const action = { type: 'unknown' };
        const nextState = filterReducer(initialState, action);
        expect(nextState).toEqual({
            category: '',
            searchKeyword: '',
        });
    });

    it('should return the filter with the new category when given by CATEGORY_THREADS action', () => {
        const initialState = {
            category: '',
            searchKeyword: '',
        };
        const action = {
            type: ActionType.CATEGORY_THREADS,
            payload: { category: 'react' },
        };
        const nextState = filterReducer(initialState, action);
        expect(nextState).toEqual({
            ...initialState,
            category: action.payload.category,
        });
    });

    it('should return the filter with the new searchKeyword when given by SEARCH_THREADS action', () => {
        const initialState = {
            category: '',
            searchKeyword: '',
        };
        const action = {
            type: ActionType.SEARCH_THREADS,
            payload: { keyword: 'automation testing' },
        };
        const nextState = filterReducer(initialState, action);
        expect(nextState).toEqual({
            ...initialState,
            searchKeyword: action.payload.keyword,
        });
    });
});
