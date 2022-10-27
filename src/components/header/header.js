import React, {useState} from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div className='header-wrap'>
            <Navbar light expand="md">
                <NavbarBrand href="/">Aspid's website</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/gallery/">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com/aspid_r">
                            My Twitter
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;