import React, { useContext, useState } from 'react'
import { Accordion, AccordionContext, Button, Card, useAccordionToggle } from 'react-bootstrap'
import './MessageAccordion.css'

export default function MessageAccordion({cards, onDelete, onEdit, icon}) {

    const [currentActiveKey, setCurrentActiveKey] = useState("0");

    const toggleActiveKey = (key) => {
        setCurrentActiveKey(currentActiveKey === key ? null : key);
    };
    
    const accordionCards = cards.map((card, index) => <Accordion key={index.toString()} defaultActiveKey="0">
        <Card>
            <Card.Header>
      {/* <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header> */}
                <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}
                    // style={currentActiveKey === index.toString() ? { backgroundColor: "lightskyblue" } : null}
                    onClick={() => { toggleActiveKey(index.toString()) }}>
                    {card.props.message.title}
                </Accordion.Toggle>
                <div className="message-card-bottons">
                    {onEdit && <Button variant="light" onClick={() => onEdit(card.props.message.id)}><i className="bi bi-pencil" style={{ color: 'lightskyblue', fontWeight: 'bold' }}></i></Button>}
                    {onDelete && <Button variant="light" onClick={() => onDelete(card.props.message.id)}><i className="bi bi-trash" style={{ color: 'red' }}></i></Button>}
                    {{icon} &&  <Button variant="light" disabled>{icon[card.props.message.priority]}</Button>}
                </div>
            {/* <Card.Header>
                <ContextAwareToggle eventKey={index.toString()}>{card.props.tenant.name}</ContextAwareToggle>
            </Card.Header> */}
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body>{card}</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>)
    return (
        <div className="c-hoa-accordion">
            {/* <Accordion defaultActiveKey="0"> */}
                {accordionCards}
            {/* </Accordion> */}
        </div>
    )
}
