import styled from 'styled-components';
import colors from '../../styles/colors';

import { SectionContent } from '../../styles/globals';

export const WriteCommentStyled = styled(SectionContent)({
    marginTop: 20,
    padding: 24,
});

export const WriteCommentLogout = styled.p({
    color: colors.slate800,
    fontSize: 15,
    marginBottom: 6,
});

export const ListCommentsStyled = styled(SectionContent)({
    marginTop: 20,
    padding: 24,
});

export const ListCommentsContent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 20,
});

export const CommentItemStyled = styled.div({
    borderBottom: `1px solid ${colors.slate200}`,
    paddingBottom: 20,
    '&:last-child': {
        border: 'none',
    },
});

export const CommentBody = styled.p({
    fontSize: 14,
    marginTop: 10,
});

export const CommentHeaderStyled = styled.div({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
});

export const CommentHeaderUser = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 10,
});

export const CommentHeaderPhoto = styled.img({
    borderRadius: '50%',
    height: 30,
    objectFit: 'cover',
    width: 30,
});

export const CommentHeaderName = styled.p({
    fontSize: 15,
    fontWeight: 600,
});

export const CommentHeaderDate = styled.small({
    color: colors.slate600,
});
