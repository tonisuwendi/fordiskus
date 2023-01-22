import styled from 'styled-components';

import colors from '../../styles/colors';

export const ButtonStyled = styled.button(({ isActive }) => ({
    alignItems: 'center',
    background: 'transparent',
    border: `1px solid ${isActive ? colors.primary100 : colors.slate200}`,
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex',
    gap: 5,
    padding: '6px 12px',
    transition: '0.2s',
    '&:hover': {
        backgroundColor: colors.slate100,
    },
    '>svg': {
        color: isActive ? colors.primary100 : colors.slate600,
        fontSize: 16,
    },
}));

export const AmountInfo = styled.span({
    color: colors.slate600,
    fontSize: 14,
    fontWeight: 600,
});

export const ThreadAction = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 6,
    marginTop: 15,
});
