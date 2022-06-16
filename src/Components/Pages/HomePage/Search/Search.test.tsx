import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search ', () => {
  test('renders search component', () => {
    render(<Search />);

    const searchForm = screen.getByPlaceholderText('Search...');
    expect(searchForm).toBeInTheDocument();
  });
  test('onChange Search  input', () => {
    render(<Search />);
    screen.debug();
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'React' },
    });
    screen.debug();
  });
});

describe('local storage test', () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
  });
});