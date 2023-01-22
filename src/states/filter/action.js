const ActionType = {
    CATEGORY_THREADS: 'filter/category',
    SEARCH_THREADS: 'filter/search',
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
