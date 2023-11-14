import { render, screen } from '@testing-library/react';
import Home from '../components/Home.jsx';


describe('About', () => {
  it('renders headline', () => {
    render(<Home />);
    const headline = screen.getByText(/Home/i);
    expect(headline).toBeInTheDocument();
  });
});