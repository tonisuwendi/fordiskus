const ActionType = {
    CATEGORY_THREADS: 'CATEGORY_THREADS',
    SEARCH_THREADS: 'SEARCH_THREADS',
};

const filterCategoryActionCreator = (category) => ({
    type: ActionType.CATEGORY_THREADS,
    payload: { category },
});

const searchThreadsActionCreator = (keyword) => ({
    type: ActionType.SEARCH_THREADS,
    payload: { keyword },
});

export {
    ActionType,
    filterCategoryActionCreator,
    searchThreadsActionCreator,
};
