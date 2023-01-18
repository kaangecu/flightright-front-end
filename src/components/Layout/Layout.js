import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import ApiPage from '../ApiPage/ApiPage';
import { SPRING_API_ROUTE, NODE_API_ROUTE } from '../../consts/consts';

const Layout = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Spring Api</Nav.Link>
            <Nav.Link href="/node">Nodejs Api</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ApiPage
                apiRoute={SPRING_API_ROUTE.apiRoute}
                header={SPRING_API_ROUTE.header}
              />
            }
          />
          <Route
            path="/node"
            element={
              <ApiPage
                apiRoute={NODE_API_ROUTE.apiRoute}
                header={NODE_API_ROUTE.header}
              />
            }
          />
        </Routes>
      </main>
    </Container>
  );
};

export default Layout;
