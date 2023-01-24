/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';
import { ImSpinner2 } from 'react-icons/im';

import '../../styles/globals.css';

const Button = ({
    label,
    variant,
    size,
    type,
    disabled,
    full,
    isLoading,
    style,
    leftIcon,
    rightIcon,
    onClick,
}) => (
    <button
        className={`button button-${variant} button-size-${size} ${full ? 'full-width' : ''} ${disabled || isLoading ? `button-${variant}-disabled` : ''}`}
        type={type}
        style={style}
        disabled={disabled || isLoading}
        onClick={onClick}
    >
        {isLoading ? <ImSpinner2 className="icon-loading" /> : (
            <>
                {leftIcon}
                {label}
                {rightIcon}
            </>
        )}
    </button>
);

Button.propTypes = {
    /** Text button content */
    label: PropTypes.string.isRequired,
    /** Specify the button variant */
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline', 'outline-danger']),
    /** Specify the button size */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specify the button type */
    type: PropTypes.oneOf(['button', 'submit']),
    /** Specify whether the button should be disabled, or not */
    disabled: PropTypes.bool,
    /** Specify whether the button should be displayed as block and 100% width, or not */
    full: PropTypes.bool,
    /** Specify whether the button should be loading, or not */
    isLoading: PropTypes.bool,
    style: PropTypes.object,
    /** Specify the button left icon component */
    leftIcon: PropTypes.node,
    /** Specify the button right icon component */
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
    full: false,
    isLoading: false,
    style: {},
    leftIcon: null,
    rightIcon: null,
    onClick: () => {},
};

export default Button;
