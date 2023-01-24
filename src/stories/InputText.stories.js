import React from 'react';
import Button from '../components/Button';

import { InputText } from '../components/Form';
import { AuthContainer, AuthForm, AuthTitle } from '../styles/globals';

const stories = {
    title: 'Components/Form/InputText',
    component: InputText,
    argTypes: {
        id: { control: false },
        name: { control: false },
    },
};

export default stories;

const TemplateStory = (args) => <InputText {...args} />;

export const Default = TemplateStory.bind({});
Default.args = {
    id: 'input-text',
    name: 'input-text',
    label: 'Input Text',
    value: '',
    placeholder: 'Enter Text',
    onChange: () => {},
};

export const Example = () => (
    <AuthContainer>
        <AuthTitle>Create your account</AuthTitle>
        <AuthForm>
            <InputText
                id="name"
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                value=""
                onChange={() => {}}
            />
            <InputText
                id="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                value=""
                onChange={() => {}}
            />
            <Button full label="Create Account" size="large" />
        </AuthForm>
    </AuthContainer>
);
