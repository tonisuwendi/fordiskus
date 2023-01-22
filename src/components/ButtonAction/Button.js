import React from 'react';
import PropTypes from 'prop-types';
import { FaRegComment } from 'react-icons/fa';
import {
    AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike,
} from 'react-icons/ai';

import { AmountInfo, ButtonStyled } from './styled';

const Button = ({
    isActive, amount, type, onClick,
}) => {
    let icon;
    switch (type) {
    case 'like':
        icon = isActive ? <AiFillLike /> : <AiOutlineLike />;
        break;
    case 'dislike':
        icon = isActive ? <AiFillDislike /> : <AiOutlineDislike />;
        break;
    case 'comment':
        icon = <FaRegComment />;
        break;
    default:
        icon = null;
    }
    return (
        <ButtonStyled
            isActive={isActive}
            type="button"
            onClick={onClick}
        >
            {icon}
            <AmountInfo>{amount}</AmountInfo>
        </ButtonStyled>
    );
};

Button.propTypes = {
    isActive: PropTypes.bool,
    amount: PropTypes.number,
    type: PropTypes.oneOf(['like', 'dislike', 'comment']).isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    isActive: false,
    amount: 0,
    onClick: () => {},
};

export default Button;
