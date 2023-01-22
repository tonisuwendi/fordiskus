import styled from 'styled-components';

import colors from '../../styles/colors';

export const SearchBoxStyled = styled.div({
    width: 650,
    height: 38,
    position: 'relative',
    '@media screen and (max-width: 1150px)': {
        width: 500,
    },
    '@media screen and (max-width: 950px)': {
        width: 300,
    },
    '@media screen and (max-width: 750px)': {
        width: 'calc(100% - 380px)',
    },
    '@media screen and (max-width: 650px)': {
        display: 'none',
    },
});

export const SearchBoxInput = styled.input({
    backgroundColor: 'white',
    border: `1px solid ${colors.slate400}`,
    borderRadius: 8,
    fontSize: 14,
    height: '100%',
    outline: 'none',
    padding: '0 16px',
    transition: '0.2s',
    width: '100%',
    '&:hover': {
        borderColor: colors.slate500,
    },
    '&:focus': {
        borderColor: colors.primary100,
    },
});

export const SearchBoxButton = styled.button({
    background: 'transparent',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 18,
    position: 'absolute',
    lineHeight: 0,
    padding: '6px 8px',
    right: 4,
    transform: 'translate(0, -50%)',
    transition: '0.2s',
    top: '50%',
    '&:hover': {
        backgroundColor: colors.slate200,
    },
});
