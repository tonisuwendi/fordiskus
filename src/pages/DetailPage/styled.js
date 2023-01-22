import styled from 'styled-components';

export const DetailContainer = styled.div({
    alignItems: 'flex-start',
    display: 'flex',
    gap: 30,
    margin: '30px auto',
    width: 1000,
    '@media screen and (max-width: 1050px)': {
        width: 800,
    },
    '@media screen and (max-width: 850px)': {
        width: 600,
    },
    '@media screen and (max-width: 650px)': {
        margin: '20px auto',
        width: '92%',
    },
});

export const DetailContent = styled.div({
    width: '100%',
});

export const DetailLeaderboards = styled.div({
    flexShrink: 0,
    position: 'sticky',
    top: 80,
    width: 300,
    '@media screen and (max-width: 850px)': {
        width: 220,
    },
    '@media screen and (max-width: 650px)': {
        display: 'none',
    },
});
