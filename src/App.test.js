import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navbar brand', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  // Brand text in Navbar
  const brand = screen.getByText(/Bhumika|Your Name/i);
  expect(brand).toBeInTheDocument();
});
