import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>TuringTech</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Link href='/' passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href='/login' passHref>
                <Nav.Link>Sign In</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
