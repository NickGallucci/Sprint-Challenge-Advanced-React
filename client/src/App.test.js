import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 


test('Renders without Crashing', () => {
  render(<App />);
})

afterEach(rtl.cleanup) 

test(`Renders without crashing, has class name of 'App'`, () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByTestId("app-test-id"); 
  expect(element).toHaveClass('App');
}); 

test('toggle loads dark mode', () => {
  const { getByTestId } = render(<App/>);
  getByTestId("toggle-element");
})

// test(' Players card contains text', () => {
//   const players = render(<App />);
//   players.getByText(//i);
// }); 