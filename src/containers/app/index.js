//-------------------------------------------------------------
// Messaging Client (Prototype)
//
// app/index.js
//
// Main app navigation
//--------------------------------------------------------------
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Inbox from '../inbox';
import WriteMessage from '../writeMessage';
import './index.css';

const App = () =>
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a>Message Client</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/">Inbox</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/write">Write Message</Link>
        </NavItem>
      </Nav>
    </Navbar>

    <main>
      <Route exact path="/" component={Inbox} />
      <Route exact path="/write" component={WriteMessage} />
    </main>
  </div>;

export default App;
