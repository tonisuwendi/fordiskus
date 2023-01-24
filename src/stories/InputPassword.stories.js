import React from 'react';
import Button from '../components/Button';

import { InputPassword } from '../components/Form';
import { AuthContainer, AuthForm, AuthTitle } from '../styles/globals';

const stories = {
    title: 'Components/Form/InputPassword',
    component: InputPassword,
    argTypes: {
        id: { control: false },
        name: { control: false },
    },
};

export default stories;

const TemplateStory = (args) => <InputPassword {...args} />;

export const Default = TemplateStory.bind({});
Default.args = {
    id: 'input-password',
    name: 'input-password',
    label: 'Input Password',
    value: '',
    placeholder: 'Enter Password',
    onChange: () => {},
};

export const Example = () => (
    <AuthContainer>
        <AuthTitle>Change your password</AuthTitle>
        <AuthForm>
            <InputPassword
                id="newPassword"
                name="newPassword"
                label="New Password"
                placeholder="Enter new password"
                value=""
                onChange={() => {}}
            />
            <InputPassword
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter confirm password"
                value=""
                onChange={() => {}}
            />
            <Button full label="Change Password" size="large" />
        </AuthForm>
    </AuthContainer>
);
