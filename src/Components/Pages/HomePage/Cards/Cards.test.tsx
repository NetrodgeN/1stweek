import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

describe('Cards', () => {
  test('renders cards component', () => {
    render(<Cards />);
    expect(screen.getByText(/Брюки/i)).toBeInTheDocument();
  });
  test('learn ', () => {
    render(<Cards />);
    const getByAltText = screen.getByAltText(/брюки/i);
    expect(getByAltText).toBeInTheDocument();
  });
});