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
    const [showModalNewTenant, setShowModalNewTenant] = useState(false);
    const [showModalEditTenant, setShowModalEditTenant] = useState(false);
    const [showModalRemoveTenant, setShowModalRemoveTenant] = useState(false);
    const [showSignupError, setShowSignupError] = useState(false);
    const [showRemoveError, setShowRemoveError] = useState(false);
    const [showEditError, setShowEditError] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [apartement, setApartement] = useState(undefined);
    const [tenantForDel, setTenantForDel] = useState(undefined);
    const [tenantForEdit, setTenantForEdit] = useState(undefined);
    // const [img, setImg] = useState(null);

    const operations = {
        CREATE: "create",
        UPDATE: "update",
        DELETE: "delete"
    }

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

    function filter() {
        return filterText && filterText !== "" ? tenantsCards.filter((card) => card.props.tenant.name.toLowerCase().includes(filterText.toLowerCase()) ||
            card.props.tenant.email.toLowerCase().includes(filterText.toLowerCase()) ||
            (card.props.tenant.apartement + '').includes(filterText)) : tenantsCards;
    }

    function handleClose(operation) {
        switch (operation) {
            case operations.CREATE:
                setShowModalNewTenant(false);
                setShowSignupError(false);//Clear also errors
                setEmail("");
                setPwd("");
                setName("");
                setApartement(undefined);
                break;
            case operations.UPDATE:
                setShowModalEditTenant(false);
                setShowEditError(false);
                setTenantForEdit(undefined);
                setEmail("");
                setPwd("");
                setName("");
                setApartement(undefined);
                break;
            case operations.DELETE:
                setShowModalRemoveTenant(false);
                setShowRemoveError(false);
                setTenantForDel(undefined);
                break;
        }
    }

    function handleSubmit(e) {

        // validation code is missing here...

        const user = new Parse.User()
        user.set('username', email);
        user.set('email', email);
        user.set('apartement', apartement);
        user.set('role', 1);
        user.set('name', name);
        user.set('buildingId', activeUser.buildingId);
        user.set('password', pwd);

        const acl = new Parse.ACL();
        acl.setPublicWriteAccess(true);
        acl.setPublicReadAccess(true);
        user.setACL(acl);

        //at this point the "committee" is the current user save this user session for use later
        var sessionToken = Parse.User.current().get("sessionToken");

        user.signUp().then((parseUser) => {
            //const activeUser = new UserModel(parseUser);
            //onLogin(activeUser);
            //right now i have successfully signed up a new "tenant" and am actually logged in as that tenant
            Parse.User.become(sessionToken).then(function (user) {
                // The current user is now set back to the committee.
            });
            setShowModalNewTenant(false);
        }).catch(error => {
            setShowSignupError(true);
            console.error('Error while signing up user', error);
        }).finally(() => {
            // Cleaning up
            setEmail("");
            setPwd("");
            setName("");
            setApartement(null);
        });
    }

    async function removeTenant() {
        //e.preventDefault();
        console.log("tenant to be deleted " + tenantForDel)
        try {
            const activeUser = await UserModel.remove(tenantForDel);
            setShowModalRemoveTenant(false);
        } catch (error) {
            console.error('Error while removing user', error);
            setShowRemoveError(true);
        }
    }

    async function editTenant() {
        try {
            await UserModel.update(tenantForEdit, email, name, apartement);
            handleClose(operations.UPDATE);
        } catch (error) {
            console.error('Error while edit user', error);
            setShowEditError(true);
        } finally {

        }
    }

    async function preperForTenantEdit(id) {
        try {
            const userToEdit = await UserModel.get(id);
            setEmail(userToEdit.email);
            setName(userToEdit.name);
            //setPwd(userToEdit.password);
            setApartement(userToEdit.apartement);
            setTenantForEdit(id);
            setShowModalEditTenant(true);
        } catch (error) {
            console.error('Error while get user with id=' + id, error);
            setShowEditError(true);
        }
    }

    function preperFotTenantDelete(id) {
        setTenantForDel(id);
        setShowModalRemoveTenant(true);
    }

    // function handleFileChange(e){
    //     if (e.target.files.length === 1) {
    //         setImg(e.target.files[0]);
    //     } else {
    //         setImg(null);
    //     }
    // }


    return (
        <Container className="p-tenants">
            {/* <img  className="p-tenants-img" src={image}></img> */}
            <Filter
                icon={<i className="bi bi-funnel-fill"></i>}
                // <i className="bi bi-funnel-fill"></i><i className="bi bi-search"></i>
                placeholder="Filter tenants by name or email or apartement..."
                filterText={filterText}
                filterTextChange={(text) => setFilterText(text)}
            />
            <div className="new-tenant">
                <Button variant="link" onClick={() => setShowModalNewTenant(true)}><i className="bi bi-plus-circle-fill" style={{ color: 'lightskyblue' }}></i> Add New Tenant</Button>
            </div>
            <Modal show={showModalNewTenant} onHide={() => handleClose(operations.CREATE)} backdrop="static" keyboard={false}>
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
                        {/* <Form.Group as={Row} controlId="formHorizontalImg">
                            <Form.Label column sm={4}>Tenant Image:</Form.Label>
                            <Col>
                                <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                            </Col>
                        </Form.Group>
                        <Image src={img ? typeof img === 'object' ? URL.createObjectURL(img) : img : ""} /> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(operations.CREATE)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <HoaAccordion cards={filter()} onDelete={preperFotTenantDelete} onEdit={preperForTenantEdit}></HoaAccordion>
            <Modal show={showModalRemoveTenant} onHide={() => handleClose(operations.DELETE)} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Tenant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showRemoveError ? <Alert variant="danger">Error in Removal!</Alert> : null}
                        Are you sure you want to delete user?
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={removeTenant}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={() => handleClose(operations.DELETE)}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModalEditTenant} onHide={() => handleClose(operations.UPDATE)} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Tenant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showEditError ? <Alert variant="danger">Update Error!</Alert> : null}
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
                    <Button variant="secondary" onClick={() => handleClose(operations.UPDATE)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editTenant}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default TenantsPage;