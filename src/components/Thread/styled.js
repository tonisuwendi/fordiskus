import styled from 'styled-components';

import colors from '../../styles/colors';
import { SectionContent } from '../../styles/globals';

export const ThreadsContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
});

export const ThreadItemStyled = styled(SectionContent)(({ isDetail }) => ({
    padding: isDetail ? 24 : 18,
}));

export const ThreadHeaderStyled = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 10,
});

export const ThreadHeaderPhoto = styled.img(({ isDetail }) => ({
    borderRadius: '50%',
    height: isDetail ? 40 : 35,
    objectFit: 'cover',
    width: isDetail ? 40 : 35,
}));

export const ThreadHeaderName = styled.p(({ isDetail }) => ({
    fontSize: isDetail ? 14 : 13,
}));

export const ThreadHeaderDate = styled.small({
    color: colors.slate600,
    fontSize: 11,
});

export const ThreadContentTitle = styled.p(({ withLink, isDetail }) => ({
    color: colors.slate800,
    display: 'inline-block',
    fontSize: isDetail ? 24 : 15,
    fontWeight: 600,
    marginTop: 15,
    ...(withLink && ({
        '&:hover': {
            color: colors.primary200,
            textDecoration: 'underline',
        },
    })),
}));

export const ThreadContentBody = styled.p(({ withLineClamp, isDetail }) => ({
    color: colors.slate600,
    fontSize: isDetail ? 14 : 13,
    marginTop: isDetail ? 10 : 4,
    ...(withLineClamp && ({
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    })),
}));

export const CreateInfoContainer = styled(SectionContent)({
    padding: 23,
    marginBottom: 12,
});

export const CreateInfoTitle = styled.h2({
    fontSize: 23,
    marginBottom: 10,
});

export const EmptyDataContainer = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const EmptyDataImage = styled.img({
    width: 200,
});

export const EmptyDataText = styled.p({
    color: colors.slate600,
    marginTop: 10,
});

export const HomeFilterMobile = styled.div({
    alignItems: 'center',
    display: 'flex',
    gap: 10,
    marginBottom: 10,
});

export const SearchInfoStyled = styled.div({
    backgroundColor: colors.slate200,
    border: `1px solid ${colors.slate300}`,
    borderRadius: 6,
    padding: '12px 16px',
    fontSize: 14,
    marginBottom: 12,
});

export const ThreadDetailContent = styled.div({
    width: '100%',
});
