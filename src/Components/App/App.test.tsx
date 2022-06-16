// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//  render(<App />);
//   const linkElement = screen.getByText(/homepage/i);
//   expect(linkElement).toBeInTheDocument();
//   // screen.debug();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("App component", ()=>{
 test("renders App", ()=>{
  render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  );
  const name = screen.getByText(/Тапочки/i);
  expect(name).toBeInTheDocument();
 })
})