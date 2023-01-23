import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from './CommentItem';
import { ListCommentsContent, ListCommentsStyled } from './styled';
import { SectionTitle } from '../../styles/globals';

const ListComments = ({ comments }) => (
    <ListCommentsStyled>
        <SectionTitle data-testid="comments-title">{`Komentar (${comments.length})`}</SectionTitle>
        <ListCommentsContent>
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    {...comment}
                />
            ))}
        </ListCommentsContent>
    </ListCommentsStyled>
);

ListComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
    })),
};

ListComments.defaultProps = {
    comments: [],
};

export default ListComments;
