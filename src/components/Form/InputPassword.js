import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import {
    FormGroup,
    FormGroupBody,
    FormGroupInput,
    FormGroupLabel,
    FormGroupPasswordIcon,
} from './styled';

const InputPassword = ({
    id, name, label, value, placeholder, onChange,
}) => {
    const [isPassword, setIsPassword] = useState(true);

    const handleToggleType = () => setIsPassword((prevState) => !prevState);

    return (
        <FormGroup>
            <FormGroupLabel htmlFor={id}>{label}</FormGroupLabel>
            <FormGroupBody>
                <FormGroupInput
                    type={isPassword ? 'password' : 'text'}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <FormGroupPasswordIcon
                    type="button"
                    tabIndex={-1}
                    onClick={handleToggleType}
                >
                    {isPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </FormGroupPasswordIcon>
            </FormGroupBody>
        </FormGroup>
    );
};

InputPassword.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

InputPassword.defaultProps = {
    name: '',
    placeholder: '',
};

export default InputPassword;
