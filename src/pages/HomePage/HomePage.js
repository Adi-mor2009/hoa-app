import React from 'react';
import { Container } from 'react-bootstrap';
import './HomePage.css'
import image from '../../asserts/three.jpg';

function HomePage(props) {
    return (
        <Container className="p-home">
            <img  className="p-home-img" src={image}></img>
            <h1 className="display-1">HOA System</h1>
            <p>Manage your house!</p>
        </Container>
    );
}

export default HomePage; 