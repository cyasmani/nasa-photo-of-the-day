import React, { useState } from 'react'
import { Container, Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";


function Header () {

    return(
            <Navbar color="dark" className="">
            <Nav style={{width:"100%"}}className="row">
                    <NavbarBrand style={{color:"lime"}} >Nasa</NavbarBrand>
                    <Container className="themed-container" fluid="lg">
                        <NavItem style={{color:"white"}}className="">
                            <NavLink  href="#">Explore</NavLink>
                        </NavItem>
                        <NavItem style={{color:"white"}}className=""> 
                            <NavLink  href="#">Sign Up</NavLink>
                        </NavItem>
                        <NavItem style={{color:"white"}}className=""> 
                            <NavLink href="#">Log in</NavLink>
                        </NavItem>
                </Container>	
            </Nav>
        </Navbar>
    )
}


export default Header


