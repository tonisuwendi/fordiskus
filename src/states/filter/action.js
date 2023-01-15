const ActionType = {
    CATEGORY_THREADS: 'CATEGORY_THREADS',
};

const filterCategoryActionCreator = (category) => ({
    type: ActionType.CATEGORY_THREADS,
    payload: { category },
});

export {
    ActionType,
    filterCategoryActionCreator,
};
