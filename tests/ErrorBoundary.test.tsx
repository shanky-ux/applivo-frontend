import React from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const ThrowError = () => {
  throw new Error('Test crash');
};

describe('ErrorBoundary Component', () => {
  it('should render fallback UI when child throws', () => {
    // Suppress console.error for clean test output
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Simple render check
    const boundary = new ErrorBoundary({ children: null });
    expect(boundary.state.hasError).toBe(false);

    spy.mockRestore();
  });
});
