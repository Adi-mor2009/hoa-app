import {Card, Col, Row } from "react-bootstrap";
import './MessageCard.css';
import image from '../../asserts/man2.png';

function MessageCard({message}){
    return(
        <div className="c-message-card">
            <Card>
                <Row className='no-gutters'>
                    <Col className="col-md-4">
                        <Card.Img variant="top" src={image} />
                    </Col>
                    <Col className="col-md-8">
                        <Card.Body>
                            <Card.Title>Name: {message.name}</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Email {message.email}</Card.Subtitle> */}
                            {/* <Card.Text>
                                Apartement: {message.apartement}
                            </Card.Text> */}
                            {/* <div className="tenant-card-bottons">
                                <Button variant="light"><i className="bi bi-pencil" style={{color: 'lightskyblue'}}></i></Button>
                                <Button variant="light"><i className="bi bi-trash" style={{color: 'red'}}></i></Button>
                            </div> */}
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
        </div>
    )
}

export default MessageCard;