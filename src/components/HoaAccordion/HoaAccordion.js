import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import './HoaAccordion.css'

export default function HoaAccordion({ cards }) {
    const accordionCards = cards.map((card, index) => <Accordion key={index.toString()} defaultActiveKey="0">
                                                            <Card>
                                                                <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                                                                    {card.props.tenant.name}
                                                                </Accordion.Toggle>
                                                                <Accordion.Collapse eventKey={index.toString()}>
                                                                    <Card.Body>{card}</Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                        </Accordion>)
    return (
        <div className="c-hoa-accordion">
            {accordionCards}
        </div>
    )
}
