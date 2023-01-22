import styled from 'styled-components';

export const HomeContainer = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    gap: 20,
    margin: '30px auto',
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
    '@media screen and (max-width: 650px)': {
        margin: '20px auto',
    },
});

export const HomeLeft = styled.div({
    flexShrink: 0,
    position: 'sticky',
    top: 80,
    width: 200,
    '@media screen and (max-width: 1150px)': {
        width: 180,
    },
    '@media screen and (max-width: 950px)': {
        width: 150,
    },
    '@media screen and (max-width: 650px)': {
        display: 'none',
    },
});

export const HomeContent = styled.div({
    width: '100%',
});

export const HomeRight = styled.div({
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    gap: 20,
    position: 'sticky',
    top: 80,
    width: 300,
    '@media screen and (max-width: 1150px)': {
        width: 250,
    },
    '@media screen and (max-width: 950px)': {
        width: 200,
    },
    '@media screen and (max-width: 650px)': {
        display: 'none',
    },
});
