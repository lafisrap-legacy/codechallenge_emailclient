import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import App from './index';

it('creates an App component', () => {
  // Render a checkbox with label in the document
  const app = shallow(<App />);

  expect(app.find(Nav)).toHaveLength(1);
  expect(app.find(Navbar)).toHaveLength(1);
  expect(app.find(NavItem)).toHaveLength(2);
});