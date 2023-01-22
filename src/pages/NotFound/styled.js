import styled from 'styled-components';

import colors from '../../styles/colors';

export const NotFoundStyled = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px 0',
});

export const NotFoundImage = styled.img({
    width: 400,
});

export const NotFoundText = styled.h3({
    color: colors.slate600,
    fontSize: 22,
    margin: '20px 0',
});
