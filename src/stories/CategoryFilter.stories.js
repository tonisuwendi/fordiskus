import React from 'react';

import CategoryItem from '../components/CategoriesSection/Item';
import { CategoriesSectionStyled } from '../components/CategoriesSection/styled';

const stories = {
    title: 'Components/CategoryItem',
    component: CategoryItem,
};

export default stories;

const TemplateStory = (args) => (
    <CategoriesSectionStyled style={{ width: 200 }}>
        <CategoryItem {...args} />
    </CategoriesSectionStyled>
);

export const Default = TemplateStory.bind({});
Default.args = {
    isActive: false,
    name: '#javascript',
    amount: 140,
    onClick: () => {},
};

export const Example = () => (
    <CategoriesSectionStyled style={{ width: 200 }}>
        <CategoryItem isActive name="#javascript" amount={928} />
        <CategoryItem name="#react" amount={684} />
        <CategoryItem name="#storybook" amount={133} />
    </CategoriesSectionStyled>
);
