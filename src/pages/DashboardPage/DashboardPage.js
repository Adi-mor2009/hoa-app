import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import './DashboardPage.css'

export default function DashboardPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <Container className="p-dashboard">
            <h1>{activeUser.name}'s dashboard</h1>
        </Container>
    )
}
