import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormGroupLabel, FormGroupTextarea } from './styled';

const Textarea = ({
    id, name, label, value, placeholder, onChange,
}) => (
    <FormGroup>
        <FormGroupLabel htmlFor={id}>{label}</FormGroupLabel>
        <FormGroupTextarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </FormGroup>
);

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

Textarea.defaultProps = {
    label: '',
    name: '',
    placeholder: '',
};

export default Textarea;
