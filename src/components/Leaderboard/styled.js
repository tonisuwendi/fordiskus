import styled from 'styled-components';

import colors from '../../styles/colors';
import { SectionContent, SectionTitle } from '../../styles/globals';

export const LeaderboardSection = styled(SectionContent)({
    padding: 18,
    '@media screen and (max-width: 650px)': {
        marginBottom: 10,
    },
});

export const LeaderboardTitle = styled(SectionTitle)({
    alignItems: 'center',
    display: 'flex',
    gap: 4,
});

export const LeaderboardList = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
});

export const LeaderboardItemStyled = styled.div({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
});

export const LeaderboardUser = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 10,
});

export const LeaderboardPhoto = styled.img({
    borderRadius: '50%',
    height: 30,
    objectFit: 'cover',
    width: 30,
});

export const LeaderboardName = styled.p({
    color: colors.slate600,
    fontSize: 14,
});

export const LeaderboardScore = styled.p({
    fontSize: 14,
    fontWeight: 600,
});

export const LeaderboardMore = styled.div({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
});
