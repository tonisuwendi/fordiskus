import styled from 'styled-components';

import colors from '../../styles/colors';
import { SectionContent } from '../../styles/globals';

export const ProfileSectionStyled = styled(SectionContent)({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '24px 20px',
});

export const ProfilePhoto = styled.img({
    borderRadius: '50%',
    height: '80',
    width: 80,
});

export const ProfileName = styled.h4({
    marginTop: 15,
});

export const ProfileScore = styled.p({
    color: colors.slate700,
    fontSize: 14,
    marginTop: 2,
});
