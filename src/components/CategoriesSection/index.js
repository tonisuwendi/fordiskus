import React from 'react';

import CategoryItem from './Item';

const DUMMY_CATEGORIES = [
    {
        name: 'Semua Kategori',
        amount: 228930,
    },
    {
        name: '#javascript',
        amount: 73292,
    },
    {
        name: '#reactjs',
        amount: 32738,
    },
    {
        name: '#nextjs',
        amount: 30119,
    },
    {
        name: '#tailwindcss',
        amount: 27192,
    },
    {
        name: '#redux',
        amount: 21832,
    },
];

const CategoriesSection = () => {
    const filtered = { category: 'Semua Kategori' };

    return (
        <div className="section-content categories-section">
            <h3 className="section-title">Kategori Populer</h3>
            {DUMMY_CATEGORIES.map((category) => (
                <CategoryItem
                    key={category.name}
                    filteredCategory={filtered.category}
                    name={category.name}
                    amount={category.amount}
                />
            ))}
        </div>
    );
};

export default CategoriesSection;
