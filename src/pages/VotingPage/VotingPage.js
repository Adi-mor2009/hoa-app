import React from 'react';
import { Container } from 'react-bootstrap';
import './VotingPage.css'
import image from '../../asserts/vote.jpg';
import { Redirect } from 'react-router';

function VotingPage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <Container className="p-voting">
            <img  className="p-voting-img" src={image}></img>
        </Container>
    );
}

export default VotingPage; 