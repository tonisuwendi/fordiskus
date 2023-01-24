import React from 'react';
import Button from '../components/Button';

import { InputText, Textarea } from '../components/Form';
import { AuthContainer, AuthForm, AuthTitle } from '../styles/globals';

const stories = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    argTypes: {
        id: { control: false },
        name: { control: false },
    },
};

export default stories;

const TemplateStory = (args) => <Textarea {...args} />;

export const Default = TemplateStory.bind({});
Default.args = {
    id: 'input-textarea',
    name: 'input-textarea',
    label: 'Write Text',
    value: '',
    placeholder: 'Enter Text',
    onChange: () => {},
};

export const Example = () => (
    <AuthContainer>
        <AuthTitle>Add new product</AuthTitle>
        <AuthForm>
            <InputText
                id="name"
                name="name"
                label="Product Name"
                placeholder="Enter your product name"
                value=""
                onChange={() => {}}
            />
            <Textarea
                id="description"
                name="description"
                label="Product Description"
                placeholder="Enter your product description"
                value=""
                onChange={() => {}}
            />
            <Button full label="Add Product" size="large" />
        </AuthForm>
    </AuthContainer>
);
