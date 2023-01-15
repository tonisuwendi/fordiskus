import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CategoryItem = () => (
    <div className="category-option skeleton">
        <Skeleton width={100} height={20} />
        <Skeleton width={60} />
    </div>
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
