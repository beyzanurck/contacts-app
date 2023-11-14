import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import About from '../components/About';

describe('About', () => {
  it('renders headline', () => {
    // Wrap the About component in BrowserRouter for the test
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const headline = screen.getByText(/About me/i);
    expect(headline).toBeInTheDocument();
  });
});