import React from 'react';
import { Container } from 'react-bootstrap';
import './MessagePage.css'
import image from '../../asserts/messages.jpg';
import { Redirect } from 'react-router';

function MessagePage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <Container className="p-message">
            <img  className="p-message-img" src={image}></img>
        </Container>
    );
}

export default MessagePage; 