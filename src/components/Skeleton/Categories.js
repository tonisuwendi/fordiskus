import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { CategoryOptionSkeleton } from '../CategoriesSection/styled';

const CategoryItem = () => (
    <CategoryOptionSkeleton>
        <Skeleton width={100} height={20} />
        <Skeleton width={60} />
    </CategoryOptionSkeleton>
);

const SkeletonCategories = () => (
    <>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
    </>
);

export default SkeletonCategories;
