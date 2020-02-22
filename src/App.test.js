import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Devon wrestling header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Devon Wrestling/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders the choose match length screen', () => {

  const {getByText} = render(<App />);
  const titleElement = getByText(/Select Match Length/i);
  expect(titleElement).toBeInTheDocument();

});