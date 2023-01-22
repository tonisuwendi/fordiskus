import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormGroupInput, FormGroupLabel } from './styled';

const InputText = ({
    id, name, label, value, placeholder, onChange,
}) => (
    <FormGroup>
        <FormGroupLabel htmlFor={id}>{label}</FormGroupLabel>
        <FormGroupInput
            type="text"
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </FormGroup>
);

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

InputText.defaultProps = {
    name: '',
    placeholder: '',
};

export default InputText;
