import { Card, Col, Form, Row } from "react-bootstrap";
import './MessageCard.css';
import image from '../../asserts/messages.png';

function MessageCard({ message, onEnter, commentText, onTextChange }) {
    
    //const comments = [{ userId: "xxx", userName: "Dudu", dateCreated:"", userComments: "I would like to have a pool on the roof pls" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }]
    // {new Date(comment.dateCreated).toString()}
    const commentsToShow = message.comments.sort((a,b)=>a.dateCreated-b.dateCreated).map(comment => <div><i class="bi bi-person-circle"></i> {comment.userName}: {comment.userComments}</div>)
    return (
        <div className="c-message-card">
            <Card>
                <Card.Body>
                    <Row className='no-gutters'>
                        <Col className="col-md-2">
                            <Card.Img variant="top" src={image} />
                        </Col>
                        <Col className="col-md-4 p-2">
                            <Card.Text>Details: {message.details}</Card.Text>
                            {message.priority == 0 &&
                                <Card.Text>Priority: Important <i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i></Card.Text>}
                            {message.priority == 1 &&
                                <Card.Text>Priority: Information <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i></Card.Text>}
                        </Col>
                        <Col className="col-md-6 border-left p-2">
                            <Card.Title>Comments</Card.Title>
                            <Card.Text className="userComment">
                                {commentsToShow}
                            </Card.Text>
                            <Form.Group controlId="commentTextArea" className="userCommentArea">
                                <Form.Control as="textarea" rows={4} type="text" placeholder="Add comment..." value={commentText} onChange = {e => onTextChange(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && e.target.value.length > 0 ? onEnter(message.id, e.target.value) : null}/>
                            </Form.Group>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MessageCard;