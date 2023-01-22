import styled from 'styled-components';

import colors from '../../styles/colors';

export const FormGroup = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
});

export const FormGroupLabel = styled.label({
    color: colors.slate700,
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 5,
});

const defaultInputStyles = {
    backgroundColor: 'white',
    border: `1px solid ${colors.slate400}`,
    borderRadius: 8,
    color: colors.slate800,
    fontSize: 14,
    fontWeight: 600,
    outline: 'none',
    transition: '0.2s',
    width: '100%',
    '&:hover': {
        borderColor: colors.slate600,
    },
    '&:focus': {
        borderColor: colors.primary100,
    },
};

export const FormGroupBody = styled.div({
    position: 'relative',
});

export const FormGroupInput = styled.input({
    ...defaultInputStyles,
    height: 45,
    padding: '0 16px',
});

export const FormGroupTextarea = styled.textarea({
    ...defaultInputStyles,
    height: 100,
    resize: 'vertical',
    padding: '12px 16px',
});

export const FormGroupPasswordIcon = styled.button({
    background: 'transparent',
    border: 'none',
    color: colors.slate600,
    cursor: 'pointer',
    fontSize: 24,
    lineHeight: 0,
    outline: 'none',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translate(0, -50%)',
});
