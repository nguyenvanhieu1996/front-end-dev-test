import React from 'react';
import {Nav, Navbar, Image, Container, NavDropdown} from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom';
import useDevice from './platform';
import './header.css';

const Header = () => {
  const {isMobile} = useDevice();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="header-container">
        <Navbar.Brand href="#home">
          <Image src="./images/logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Image src="./images/drop.svg" />
        </Navbar.Toggle>
        {isMobile && (
          <Image src="./images/search.svg" className="search-mobile" />
        )}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="menu">
            <Nav.Item>
              <Link to="/about-us" className="menu__item">
                About us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/sustainability" className="menu__item">
                Sustainability
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/insights-news" className="menu__item">
                Insights & News
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/strategies" className="menu__item">
                Strategies
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/strategies" className="menu__item">
                Funds
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/strategies" className="menu__item">
                How to Invest
              </Link>
            </Nav.Item>
            <NavDropdown title="Singapore" className="menu__dropdown">
              <NavDropdown.Item href="/america">America</NavDropdown.Item>
              <NavDropdown.Item href="/vietnam">VietNam</NavDropdown.Item>
            </NavDropdown>
            {!isMobile && (
              <Nav.Item className="menu__search">
                <Image src="./images/search.svg" />
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(Header);
