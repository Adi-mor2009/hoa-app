import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function MainNavbar({activeUser, onLogout}) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">HOA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#/tenants">Tenants</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#/messages">Messages</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#/issue">Issues</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#/vote">Vote</Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                    {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
                    {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null}
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNavbar;
