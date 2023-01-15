import { ActionType } from './action';

const filterReducer = (filter = {}, action = {}) => {
    switch (action.type) {
    case ActionType.CATEGORY_THREADS:
        return { ...filter, category: action.payload.category };
    default:
        return {
            category: filter.category || '',
        };
    }
};

export default filterReducer;
