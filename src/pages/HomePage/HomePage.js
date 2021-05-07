import React from 'react';
import { Container } from 'react-bootstrap';
import './HomePage.css'

function HomePage(props) {
    return (
        <Container className="p-home">
            <h1 className="display-1">HOA System</h1>
            <p>Manage your house!</p>
        </Container>
    );
}

export default HomePage; 