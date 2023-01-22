import styled from 'styled-components';

import colors from '../../styles/colors';

export const NavbarStyled = styled.header({
    backgroundColor: 'white',
    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    height: 65,
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 9,
});

export const NavbarContent = styled.div({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    margin: 'auto',
    width: 1100,
    '@media screen and (max-width: 1150px)': {
        width: 900,
    },
    '@media screen and (max-width: 950px)': {
        width: 700,
    },
    '@media screen and (max-width: 750px)': {
        width: '95%',
    },
});

export const NavbarBrand = styled.h1({
    color: colors.slate800,
    fontFamily: '"Secular One", sans-serif',
    fontSize: 26,
});

export const NavbarButton = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 12,
});
