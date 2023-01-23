import React from 'react';
import PropTypes from 'prop-types';

import { numberFormatted } from '../../utils';
import { CategoryOption, CategoryOptionCount, CategoryOptionName } from './styled';

const CategoryItem = ({
    isActive, name, amount, onClick,
}) => (
    <CategoryOption
        data-testid="category-item"
        isActive={isActive}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
    >
        <CategoryOptionName>{name}</CategoryOptionName>
        <CategoryOptionCount>
            {`${numberFormatted(amount)} diskusi`}
        </CategoryOptionCount>
    </CategoryOption>
);

CategoryItem.propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string,
    amount: PropTypes.number,
    onClick: PropTypes.func,
};

CategoryItem.defaultProps = {
    isActive: false,
    name: '',
    amount: 0,
    onClick: () => {},
};

export default CategoryItem;
