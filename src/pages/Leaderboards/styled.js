import styled from 'styled-components';

import { SectionContent, SectionTitle } from '../../styles/globals';

export const LeaderboardsContainer = styled.div({
    margin: '30px auto',
    width: 500,
    '@media screen and (max-width: 550px)': {
        margin: '20px auto',
        width: '92%',
    },
});

export const LeaderboardTitle = styled(SectionTitle)({
    alignItems: 'center',
    display: 'flex',
    gap: 4,
});

export const LeaderboardList = styled(SectionContent)({
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 16,
});
