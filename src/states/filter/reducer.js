import { ActionType } from './action';

const filterReducer = (filter = {}, action = {}) => {
    switch (action.type) {
    case ActionType.CATEGORY_THREADS:
        return { ...filter, category: action.payload.category };
    case ActionType.SEARCH_THREADS:
        return { ...filter, searchKeyword: action.payload.keyword };
    default:
        return {
            category: filter.category || '',
            searchKeyword: filter.searchKeyword || '',
        };
    }
};

export default filterReducer;
