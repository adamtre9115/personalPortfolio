import React from 'react';
import Link from 'gatsby-link';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import styles from './navigation.module.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {

    // this will be used to determine whether href should be #home for smoothscroll or / for redirect on brand
    const Page = window.location.pathname;

    return (
      <div>
        <Navbar className={`${styles.baseNav}`} light expand="md">
          <Container>
            <NavbarBrand className={styles.navText} href={Page === '/' ? '#home' : '/'}>Tresean Adam</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className={styles.navLi}>
                  <NavLink className={`${styles.navText} ${styles.navLink}`} href="/#about">About</NavLink>
                </NavItem>
                <NavItem className={styles.navLi}>
                  <NavLink className={`${styles.navText} ${styles.navLink}`} href="/#portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem className={styles.navLi}>
                  <NavLink className={`${styles.navText} ${styles.navLink}`} href="/#contact">Contact</NavLink>
                </NavItem>
                <NavItem className={styles.navLi}>
                  <Link className={`${styles.navText} ${styles.navLink}`} to="/blog/">Blog</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;
