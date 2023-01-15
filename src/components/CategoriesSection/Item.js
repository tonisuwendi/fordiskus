import React from 'react';
import PropTypes from 'prop-types';

import { numberFormatted } from '../../utils';

const CategoryItem = ({
    isActive, name, amount, onClick,
}) => (
    <div
        className={`category-option ${isActive ? 'active' : ''}`}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
    >
        <p className="category-option__name">{name}</p>
        <small className="category-option__count">
            {`${numberFormatted(amount)} diskusi`}
        </small>
    </div>
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
