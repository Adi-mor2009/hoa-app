import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import './MessageCard.css';
import image from '../../asserts/messages.png';

function MessageCard({ message, onEnter, commentText, onTextChange }) {

    //const comments = [{ userId: "xxx", userName: "Dudu", userImg:"", dateCreated:"", userComments: "I would like to have a pool on the roof pls" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }, { user: "Alex", comment: "Pls fix the front door" }, { user: "Hila", comment: "keep the good work! You are awsome!" }]
    // {new Date(comment.dateCreated).toString()}.toLocaleTimeString('it-IT')
    //const commentsToShow = message.comments.sort((a, b) => a.dateCreated - b.dateCreated).map(comment => <div><i class="bi bi-person-circle"></i> {comment.userName}: {comment.userComments}</div>)
    const commentsToShow = message.comments.sort((a, b) => a.dateCreated - b.dateCreated).map(
        (comment) =>
            <div>
                {!comment.userImg && <i class="bi bi-person-circle"></i>}
                {comment.userImg && <img src={comment.userImg} />}
                <span style={{ fontWeight: 'bold' }}>{comment.userName}</span>[{new Date(comment.dateCreated).toLocaleTimeString('il-IL')}]: {comment.userComments}
            </div>);
    return (
        <Container fluid className="c-message-card">
            <Card>
                <Card.Body>
                    <Row className='no-gutters'>
                        <Col xs={12} className="col-md-2">
                            {!message.img && <Card.Img variant="top" src={image} />}
                            {message.img && <Card.Img variant="top" src={message.img} />}
                        </Col>
                        <Col xs={12} className="col-md-4 p-2 c-message-info">
                            <Card.Text><span style={{ fontWeight: 'bold' }}>Details: </span> {message.details}</Card.Text>
                            {message.priority == 0 &&
                                <Card.Text><span style={{ fontWeight: 'bold' }}>Priority: </span> Important <i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i></Card.Text>}
                            {message.priority == 1 &&
                                <Card.Text><span style={{ fontWeight: 'bold' }}>Priority: </span> Information <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i></Card.Text>}
                        </Col>
                        <Col xs={12} className="col-md-6 border-left p-2">
                            <Card.Title>Comments</Card.Title>
                            <Card.Text className="userComment">
                                {commentsToShow && commentsToShow.length > 0 ? commentsToShow: <span>No comments to show</span>}
                            </Card.Text>
                            <Form>
                                <Form.Group controlId="commentTextArea" className="userCommentArea">
                                    <Form.Control as="textarea" rows={4} type="text" placeholder="Add comment..." value={commentText} onChange={e => onTextChange(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.target.value.length > 0 ? onEnter(message.id, e.target.value) : null} />
                                </Form.Group>
                            </Form>
                            {/* <Form onSubmit={e => onEnter(message.id, e.target.value)}>
                                <div className="c-comment-input">
                                    <Form.Control placeholder="Add comment..." rows={2}
                                        value={commentText} onChange={e => onTextChange(e.target.value)} />
                                    <Button className="c-comment-submit" onClick={e => onEnter(message.id, e.target.value)}><i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </div>
                            </Form> */}
                            {/* <Form>
                                <div className="userCommentArea">    
                                    <Form.Control as="textarea" rows={4} type="text" placeholder="Add comment..." value={commentText} onChange={e => onTextChange(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && e.target.value.length > 0 ? onEnter(message.id, e.target.value) : null} />
                                </div>
                            </Form> */}
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default MessageCard;