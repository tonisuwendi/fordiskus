import styled from 'styled-components';

import colors from './colors';

export const SectionContent = styled.div({
    backgroundColor: 'white',
    border: `1px solid ${colors.slate100}`,
    borderRadius: 8,
    width: '100%',
});

export const SectionTitle = styled.h3({
    color: colors.slate800,
    fontSize: 17,
    marginBottom: 15,
});

export const AuthContainer = styled.div({
    margin: '50px auto',
    width: 450,
    '@media screen and (max-width: 500px)': {
        margin: '20px auto',
        width: '92%',
    },
});

export const AuthForm = styled.form({
    marginTop: 20,
});

export const AuthTitle = styled.h2({
    fontSize: 24,
    color: colors.slate800,
});

export const AuthSubtitle = styled.p({
    fontSize: 14,
    color: colors.slate500,
    marginTop: 5,
});

export const ParagraphSecondary = styled.p({
    fontSize: 14,
    color: colors.slate500,
});

export const Flex = styled.div(({ gap = 8, direction = 'row' }) => ({
    display: 'flex',
    flexDirection: direction,
    gap,
}));
