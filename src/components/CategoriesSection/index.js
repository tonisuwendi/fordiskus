import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryItem from './Item';
import SkeletonCategories from '../Skeleton/Categories';
import { createCategoriesList } from '../../utils';
import { filterCategoryActionCreator } from '../../states/filter/action';
import { CategoriesSectionStyled } from './styled';
import { SectionTitle } from '../../styles/globals';

const CategoriesSection = () => {
    const dispatch = useDispatch();
    const { threads, filter, loading } = useSelector((states) => states);

    const handleSelectCategory = (category) => {
        dispatch(filterCategoryActionCreator(category));
    };

    const categoriesList = createCategoriesList(threads);

    return (
        <CategoriesSectionStyled>
            <SectionTitle>Kategori Populer</SectionTitle>
            {loading.threads ? <SkeletonCategories /> : (
                categoriesList.map((category) => (
                    <CategoryItem
                        key={category.name}
                        isActive={category.code === filter.category}
                        name={category.name}
                        amount={category.amount}
                        onClick={() => handleSelectCategory(category.code)}
                    />
                ))
            )}
        </CategoriesSectionStyled>
    );
};

export default CategoriesSection;
