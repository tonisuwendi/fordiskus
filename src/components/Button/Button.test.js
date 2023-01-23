/**
 * test scenario
 *
 * - Button component
 *  - should display text Tekan Saya when using the label props
 *  - should call onClick when enabled
 *  - should not call onClick when disabled
 *  - should display loading spinner when clicked
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '.';

describe('Button component', () => {
    it('should display text Tekan Saya when using the label props', () => {
        render(<Button label="Tekan Saya" />);
        const buttonElement = screen.getByRole('button', 'Tekan Saya');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should call onClick when enabled', async () => {
        const onClick = jest.fn();
        render(<Button label="Button" onClick={onClick} />);
        const buttonElement = screen.getByRole('button', 'Button');
        await userEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', async () => {
        const onClick = jest.fn();
        render(<Button disabled label="Button" onClick={onClick} />);
        const buttonElement = screen.getByRole('button', 'Button');
        await userEvent.click(buttonElement);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('should not display text Tekan Saya when loading', async () => {
        render(<Button isLoading label="Tekan Saya" />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).not.toHaveTextContent('Tekan Saya');
    });
});
