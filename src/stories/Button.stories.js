/* eslint-disable react/prop-types */

import React from 'react';
import { FaCamera, FaCopy, FaLock } from 'react-icons/fa';

import Button from '../components/Button';
import { Flex, SectionTitle } from '../styles/globals';

const stories = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        leftIcon: { control: false },
        rightIcon: { control: false },
    },
};

export default stories;

const defaultArgs = {
    label: 'Button',
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

const LayoutTemplateStore = ({ type, children, args }) => (
    <Flex direction="column" gap={20}>
        <div>
            <SectionTitle>Playground</SectionTitle>
            <Button {...args} />
        </div>
        <div>
            <SectionTitle>{`${type} Button`}</SectionTitle>
            <Flex>{children}</Flex>
        </div>
    </Flex>
);

const BasicTemplateStory = (args) => <Button {...args} />;

export const Basic = BasicTemplateStory.bind({});
Basic.args = {
    ...defaultArgs,
    variant: 'primary',
};

const VariantsTemplateStory = (args) => (
    <LayoutTemplateStore type="Variant" args={args}>
        <Button label="Primary Button" />
        <Button label="Secondary Button" variant="secondary" />
        <Button label="Danger Button" variant="danger" />
        <Button label="Outline Button" variant="outline" />
        <Button label="Outline Danger Button" variant="outline-danger" />
    </LayoutTemplateStore>
);

export const Variants = VariantsTemplateStory.bind({});
Variants.args = { ...defaultArgs };

const SizesTemplateStory = (args) => (
    <LayoutTemplateStore type="Size" args={args}>
        <Button label="Small Button" size="small" />
        <Button label="Medium Button" />
        <Button label="Large Button" size="large" />
    </LayoutTemplateStore>
);

export const Sizes = SizesTemplateStory.bind({});
Sizes.args = { ...defaultArgs };

const LeftIconTemplateStory = (args) => (
    <LayoutTemplateStore type="Left Icon" args={args}>
        <Button label="Button" leftIcon={<FaCamera />} />
        <Button label="Button" leftIcon={<FaCopy />} />
        <Button label="Button" leftIcon={<FaLock />} />
    </LayoutTemplateStore>
);

export const LeftIcon = LeftIconTemplateStory.bind({});
LeftIcon.args = { ...defaultArgs };

const RightIconTemplateStory = (args) => (
    <LayoutTemplateStore type="Right Icon" args={args}>
        <Button label="Button" rightIcon={<FaCamera />} />
        <Button label="Button" rightIcon={<FaCopy />} />
        <Button label="Button" rightIcon={<FaLock />} />
    </LayoutTemplateStore>
);

export const RightIcon = RightIconTemplateStory.bind({});
RightIcon.args = { ...defaultArgs };
