import React, { useContext, useState } from 'react'
import { Accordion, AccordionContext, Button, Card, useAccordionToggle } from 'react-bootstrap'
import ContextAwareToggle from '../ContextAwareToggle/ContextAwareToggle'
import './MessageAccordion.css'

export default function MessageAccordion({cards, onDelete, onEdit, onRead, userId, icon}) {
    const accordionCards = cards.map((card, index) => <Accordion key={index.toString()} defaultActiveKey="0">
        <Card>
            <Card.Header>
                {(!onRead || card.props.message.readBy.includes(userId)) &&<ContextAwareToggle as={Button} variant="link" eventKey={index.toString()}>
                    {card.props.message.title}
                </ContextAwareToggle>}
                {(onRead && !card.props.message.readBy.includes(userId)) &&<ContextAwareToggle as={Button} variant="link" eventKey={index.toString()} onClick={() => onRead(card.props.message.id)}>
                    {card.props.message.title}
                </ContextAwareToggle>}
                <div className="message-card-bottons">
                    {onEdit && <Button variant="light" onClick={() => onEdit(card.props.message.id)}><i className="bi bi-pencil" style={{ color: 'lightskyblue', fontWeight: 'bold' }}></i></Button>}
                    {onDelete && <Button variant="light" onClick={() => onDelete(card.props.message.id)}><i className="bi bi-trash" style={{ color: 'red' }}></i></Button>}
                    {{icon} &&  <Button variant="light" disabled>{icon[card.props.message.priority]}</Button>}
                    {(onRead && !card.props.message.readBy.includes(userId)) && <><Button variant="light" onClick={() => onRead(card.props.message.id)}>{icon[2]}</Button>
                    <div id="dot">
                        <span id="messages">1</span>
                    </div></>}
                </div>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>{card}</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>)
    return (
        <div className="c-message-accordion">
            {accordionCards}
        </div>
    )
}
