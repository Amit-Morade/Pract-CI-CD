import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it("should render hello world msg on screen", () => {
    render(<App />);
    screen.debug();
  })
})
