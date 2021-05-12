import React, { useState } from 'react';
import { Alert, Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './SignupPage.css'
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import image from '../../asserts/signup.jpg';
 

function SignupPage({ activeUser, onLogin }) {

    const [showSignupError, setShowSignupError] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [bname, setBname] = useState("");
    const [address, setAddress] = useState("");

    if (activeUser) {
        return <Redirect to="/dashboard" />
    }

    function signup(e) {
        e.preventDefault();

        // validation code is missing here...

        const BuildingId = Parse.Object.extend('BuildingId');
        const buildingObject = new BuildingId();

        buildingObject.set('name', bname);
        buildingObject.set('address', address);

        // myNewObject.save().then(
        //     (result) => {
        //         console.log('BuildingId created', result);
        //     },
        //     (error) => {
        //         console.error('Error while creating BuildingId: ', error);
        //     }
        // );


        const user = new Parse.User()
        user.set('username', email);
        user.set('email', email);
        //user.set('apartement', 1);
        user.set('role', 0);
        user.set('name', name);
        user.set('buildingId', buildingObject);
        user.set('password', pwd);

        user.signUp().then((parseUser) => {
            const activeUser = new UserModel(parseUser);
            onLogin(activeUser);
        }).catch(error => {
            setShowSignupError(true);
            console.error('Error while signing up user', error);
        });

    }

    return (
        <Container fluid className="p-signup">
            <div className="p-signup-bg-img">
                {/* <img  className="p-home-img" src={image}></img> */}
                <div className="p-form-signup">
                    <h1>Welcome to HOA</h1>
                    <p>Please fill the follwoing detais</p>
                    {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
                    <Form onSubmit={signup}>
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

                        <Form.Group controlId="formBasicname">
                            <Form.Label>Name</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control type="text" placeholder="Name"
                                    value={name} onChange={e => setName(e.target.value)} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formBasicLname">
                            <Form.Label>Building Name</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class="bi bi-house-fill"></i></InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control type="text" placeholder="Building Name"
                                    value={bname} onChange={e => setBname(e.target.value)} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class="bi bi-geo-alt-fill"></i></InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control type="text" placeholder="Full Address"
                                value={address} onChange={e => setAddress(e.target.value)} />
                            </InputGroup>
                        </Form.Group>

                        <Button variant="success" type="submit" block>
                            Signup
                    </Button>
                    </Form>
                    {/* <div className="p-home-bg-img">
                        <img  className="p-home-img" src={image}></img>
                    </div> */}
                </div>
            </div>
        </Container>
    );
}

export default SignupPage;