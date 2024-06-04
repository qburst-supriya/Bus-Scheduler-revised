import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';

describe('Test the App component', () => {
    test('Site would be up shortly text should be there', () => {
        render(<App />);
        expect(screen.getByText(/Site would be up shortly/)).toBeInTheDocument();
    });
});
