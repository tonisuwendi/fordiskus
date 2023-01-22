import styled from 'styled-components';

import colors from '../../styles/colors';
import { SectionContent } from '../../styles/globals';

export const CategoriesSectionStyled = styled(SectionContent)({
    padding: 16,
    '@media screen and (max-width: 650px)': {
        marginBottom: 10,
    },
});

export const CategoryOption = styled.div(({ isActive }) => ({
    border: '1px solid white',
    borderRadius: 8,
    cursor: 'pointer',
    padding: '10px 12px',
    transition: '0.2s',
    ...(isActive && {
        backgroundColor: colors.slate100,
        borderLeft: `2px solid ${colors.primary100}`,
    }),
    '&:hover': {
        borderColor: colors.slate200,
    },
}));

export const CategoryOptionName = styled.p({
    color: colors.slate800,
    fontSize: 14,
    fontWeight: 500,
});

export const CategoryOptionCount = styled.small({
    color: colors.slate500,
    fontSize: 12,
    fontWeight: 500,
});

export const CategoryOptionSkeleton = styled.div({
    border: '1px solid white',
    borderRadius: 8,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    padding: '10px 12px',
    '&:first-of-type': {
        borderColor: colors.slate200,
        borderLeft: `2px solid ${colors.primary100}`,
    },
});
