import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import UserModel from '../../model/UserModel';
import './LoginPage.css'
import image from '../../asserts/login2.jpg';
import Parse from 'parse';
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdbreact";

function LoginPage({ activeUser, onLogin }) {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    if (activeUser) {
        return <Redirect to="/dashboard" />
    }

    async function login(e) {
        e.preventDefault();

        //This code for using json
        // for (const user of users) {
        //     if (user.login(email, pwd)) {
        //         activeUser = user;
        //         break;
        //     }
        // }

        // if (activeUser) {
        //     onLogin(activeUser);
        // } else {
        //     setShowInvalidLogin(true);
        // }

        try {
            setLoading(true);
            const activeUser = await UserModel.login(email, pwd);
            setLoading(false);
            onLogin(activeUser);
        } catch (error) {
            console.error('Error while logging in user', error);
            setShowInvalidLogin(true);
        } finally {
            setLoading(false);
        }
    }

    //style={{backgroundImage: `url(${image}`, width: "100%", height: "100%", objectFit: "cover" }}
    return (
        loading ? <div class="p-login-spinner d-flex justify-content-center align-items-center"><Spinner animation="border" variant="primary" /></div> :
            <Container fluid className="p-login">
                <img  className="p-login-img" src={image}></img>
                <Row>
                    <Col>
                        {/* <img  className="p-home-img" src={image}></img> */}
                        <div className="p-form-login">
                            <h1>Login to HOA</h1>
                            <p>or <Link to="/signup">create an account</Link></p>
                            {showInvalidLogin ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
                            <Form onSubmit={login}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-fill"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="email" placeholder="Enter email"
                                            value={email} onChange={e => setEmail(e.target.value)} />
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i class="bi bi-lock-fill"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="password" placeholder="Password"
                                        value={pwd} onChange={e => setPwd(e.target.value)} />
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon2"><i class="bi bi-unlock-fill"></i></InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="success" type="submit" block>
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
}

export default LoginPage;