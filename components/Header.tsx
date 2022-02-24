import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../public/NextJS/icon/dark/nextjs-icon-dark.png';

function Header() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            {' '}
            <Image
              src={logo}
              alt='TuringTech'
              width={60}
              height={60}
              blurDataURL='data:...'
              placeholder='blur' // Optional blur-up while loading
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link href='/' passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href='/Signin' passHref>
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
