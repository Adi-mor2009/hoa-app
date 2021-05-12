import React from 'react';
import { Container } from 'react-bootstrap';
import './TenantsPage.css'
import image from '../../asserts/tenants.jpg';
import { Redirect } from 'react-router';

function TenantsPage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <Container className="p-tenants">
            <img  className="p-tenants-img" src={image}></img>
        </Container>
    );
}

export default TenantsPage; 