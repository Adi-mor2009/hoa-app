import { Card, Col, Form, Row } from "react-bootstrap";
import './MessageCard.css';
import image from '../../asserts/man2.png';

function MessageCard({ message }) {
    // const comments = message.comments.map(comment =>console.log(comment) )
    const comments = [{ user: "Dudu", comment: "I would like to have a pool on the roof pls" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }]
    return (
        <div className="c-message-card">
            <Card>
                <Card.Body>
                    <Row className='no-gutters'>

                        <Col className="col-md-2">
                            <Card.Img variant="top" src={image} />
                        </Col>
                        <Col className="col-md-4 p-2">

                            <Card.Title>Details: {message.details}</Card.Title>
                            {message.priority == 0 &&
                                <Card.Subtitle className="mb-2 text-muted">Priority: Important</Card.Subtitle>}
                            {message.priority == 1 &&
                                <Card.Subtitle className="mb-2 text-muted">Priority: Information</Card.Subtitle>}
                            {/* <Card.Text>
                                Apartement: {message.apartement}
                            </Card.Text> */}
                            {/* <div className="tenant-card-bottons">
                                <Button variant="light"><i className="bi bi-pencil" style={{color: 'lightskyblue'}}></i></Button>
                                <Button variant="light"><i className="bi bi-trash" style={{color: 'red'}}></i></Button>
                            </div> */}

                        </Col>
                        <Col className="col-md-6 border-left p-2">
                            <Card.Title>Comments</Card.Title>
                            <Card.Text className="userComment">
                                {comments.map(comment => (
                                    <div>
                                        <i class="bi bi-person-circle"></i> {comment.comment}
                                    </div>
                                ))}
                            </Card.Text>
                            <Form.Group controlId="comment">
                                <Form.Control type="text" placeholder="Add comment..."/>
                            </Form.Group>
                    </Col>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MessageCard;