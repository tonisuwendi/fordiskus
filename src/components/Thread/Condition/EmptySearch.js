import React from 'react';
import PropTypes from 'prop-types';

import searchImage from '../../../images/search-empty.svg';
import { EmptyDataContainer, EmptyDataImage, EmptyDataText } from '../styled';

const EmptySearch = ({ searchKeyword }) => (
    <EmptyDataContainer>
        <EmptyDataImage
            src={searchImage}
            alt="search empty"
        />
        <EmptyDataText>
            Upps.. Tidak ada hasil untuk
            {' '}
            <strong>{searchKeyword}</strong>
        </EmptyDataText>
    </EmptyDataContainer>
);

EmptySearch.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
};

export default EmptySearch;
