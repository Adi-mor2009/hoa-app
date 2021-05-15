import React, { useEffect, useState } from 'react';
import { Accordion, Alert, Button, Container, Form, InputGroup, Modal } from 'react-bootstrap';
import './TenantsPage.css'
import { Redirect } from 'react-router';
import Filter from '../../components/Filter/Filter';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import TenantCard from '../../components/TenantCard/TenantCard';
import HoaAccordion from '../../components/HoaAccordion/HoaAccordion';

function TenantsPage({ activeUser }) {

    const [tenants, setTenants] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSignupError, setShowSignupError] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [apartement, setApartement] = useState(null);

    const tenantsCards = tenants !== undefined ? tenants.map((tenant, index) => <TenantCard key={index.toString()} tenant={tenant}></TenantCard>) : [];

    useEffect(() => {
        if (activeUser || activeUser.role == 0) {
            const User = Parse.Object.extend('User');
            const query = new Parse.Query(User);

            const BuildingId = Parse.Object.extend("BuildingId");
            const myBuildingId = new BuildingId();
            myBuildingId.id = activeUser.buildingId.id;

            // Just the objectId is enough to compare the object
            query.equalTo("buildingId", myBuildingId);

            query.find().then(results => {
                // console.log(`Users found: ${JSON.stringify(results)}`);
                setTenants(results.map(result => new UserModel(result)));
            });
        }
    }, [])

    if (!activeUser || activeUser.role != 0) {
        return <Redirect to="/" />
    }

    function handleFilterTestChange(text) {
        setFilterText(text);
    }

    function filter() {
        return filterText && filterText !== "" ? tenantsCards.filter((card) => card.props.tenant.name.toLowerCase().includes(filterText.toLowerCase()) ||
            card.props.tenant.email.toLowerCase().includes(filterText.toLowerCase()) ||
            (card.props.tenant.apartement + '').includes(filterText)) : tenantsCards;
    }

    const handleClose = () => {
        setShowModal(false);
        setShowSignupError(false);//Clear also errors
    }

    function handleSubmit(e) {
        e.preventDefault();

        // validation code is missing here...

        const user = new Parse.User()
        user.set('username', email);
        user.set('email', email);
        user.set('apartement', apartement);
        user.set('role', 1);
        user.set('name', name);
        user.set('buildingId', activeUser.buildingId);
        user.set('password', pwd);

        //at this point the "committee" is the current user save this user session for use later
        var sessionToken = Parse.User.current().get("sessionToken");

        user.signUp().then((parseUser) => {
                //const activeUser = new UserModel(parseUser);
                //onLogin(activeUser);
                //right now i have successfully signed up a new "tenant" and am actually logged in as that tenant
                Parse.User.become(sessionToken).then(function (user) {
                // The current user is now set back to the committee.
                });
                setShowModal(false);
            }).catch(error => {
                setShowSignupError(true);
                console.error('Error while signing up user', error);
            }).finally(() => {
                // Cleaning up the SearchBox
                setEmail("");
                setPwd("");
                setName("");
                setApartement(null);
            });
        }

    async function removeTenant(e) {
                e.preventDefault();
                try {
                    //const activeUser = await UserModel.remove(email, pwd);
                } catch (error) {
                    console.error('Error while removing user', error);
                    //setShowInvalidRemoval(true);
                } finally {

                }
            }


    return (
            <Container className="p-tenants">
                {/* <img  className="p-tenants-img" src={image}></img> */}
                <Filter
                    icon={<i className="bi bi-funnel-fill"></i>}
                    // <i className="bi bi-funnel-fill"></i><i className="bi bi-search"></i>
                    placeholder="Filter tenants by name or email or apartement..."
                    filterText={filterText}
                    filterTextChange={handleFilterTestChange}
                />
                <div className="new-tenant">
                    <Button variant="link" onClick={() => setShowModal(true)}><i className="bi bi-plus-circle-fill" style={{ color: 'lightskyblue' }}></i> Add New Tenant</Button>
                </div>
                <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Tenant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-envelope-fill"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="email" placeholder="Enter email" required
                                        value={email} onChange={e => setEmail(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter email address.
                                </Form.Control.Feedback>
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-lock-fill"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="password" placeholder="Password" required
                                        value={pwd} onChange={e => setPwd(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid password.
                                </Form.Control.Feedback>
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2"><i className="bi bi-unlock-fill"></i></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-person-fill"></i></InputGroup.Text>
                                    </InputGroup.Prepend>

                                    <Form.Control type="text" placeholder="Name"
                                        value={name} onChange={e => setName(e.target.value)} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicApartement">
                                <Form.Label>Apartement</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><i className="bi bi-house-fill"></i></InputGroup.Text>
                                    </InputGroup.Prepend>

                                    <Form.Control type="number" placeholder="Apartement number" min={1} max={999} required
                                        value={apartement} onChange={e => setApartement(parseInt(e.target.value))} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid number.
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <HoaAccordion cards={filter()}></HoaAccordion>
            </Container>
        );
    }

    export default TenantsPage;