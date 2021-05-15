import React, { useContext, useState } from 'react'
import { Accordion, AccordionContext, Button, Card, useAccordionToggle } from 'react-bootstrap'
import './HoaAccordion.css'

export default function HoaAccordion({ cards }) {

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
                    {card.props.tenant.name}
                </Accordion.Toggle>
                <div className="tenant-card-bottons">
                    <Button variant="light" onClick={alert}><i className="bi bi-pencil" style={{ color: 'lightskyblue', fontWeight: 'bold' }}></i></Button>
                    <Button variant="light"><i className="bi bi-trash" style={{ color: 'red' }}></i></Button>
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
