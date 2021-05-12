import React from 'react';
import { Container } from 'react-bootstrap';
import './IssuePage.css'
import image from '../../asserts/issue.jpg';
import { Redirect } from 'react-router';

function IssuePage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <Container className="p-issue">
            <img  className="p-issue-img" src={image}></img>
        </Container>
    );
}

export default IssuePage; 