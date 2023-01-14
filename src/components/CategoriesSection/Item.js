import React from 'react';
import PropTypes from 'prop-types';

import { numberFormatted } from '../../utils';

const CategoryItem = ({ filteredCategory, name, amount }) => (
    <div className={`category-option ${filteredCategory === name ? 'active' : ''}`} key={name}>
        <p className="category-option__name">{name}</p>
        <small className="category-option__count">
            {`${numberFormatted(amount)} diskusi`}
        </small>
    </div>
);

CategoryItem.propTypes = {
    filteredCategory: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
};

CategoryItem.defaultProps = {
    filteredCategory: '',
    name: '',
    amount: 0,
};

export default CategoryItem;
