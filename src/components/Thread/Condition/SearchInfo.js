import React from 'react';
import PropTypes from 'prop-types';

import { SearchInfoStyled } from '../styled';

const SearchInfo = ({ searchKeyword }) => (
    <SearchInfoStyled>
        Hasil pencarian:
        {' '}
        <strong>{searchKeyword}</strong>
    </SearchInfoStyled>
);

SearchInfo.propTypes = {
    searchKeyword: PropTypes.string.isRequired,
};

export default SearchInfo;
