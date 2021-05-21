import React from 'react'
import { Alert, Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import Utils from '../../shared/Utils';

export default function CreateModal({ show, handleClose, modalTitle, showError, error, handleSubmit, formAttributes, img, handleFileChange }) {

    const form = formAttributes.map((attribute, index) =>
        <Form.Group key={index.toString()} controlId={attribute.controlId}>
            <Form.Label>{attribute.label}</Form.Label>
            {attribute.type != "select" &&
                <Form.Control type={attribute.type} placeholder={attribute.placeholder} required={attribute.isRequired}
                    value={attribute.value} onChange={e => { attribute.function(e.target.value) }} />}
            {attribute.type == "select" &&
                <Form.Control as="select" onChange={e => { attribute.function(e.target.value) }}>
                    <option>{attribute.options[0]}</option>
                    <option>{attribute.options[1]}</option>
                </Form.Control>}
        </Form.Group>);

    return (
        <Modal show={show} onHide={() => handleClose(Utils.operations.CREATE)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showError ? <Alert variant="danger">{error}</Alert> : null}
                <Form>
                    {form}
                    <Form.Group as={Row} controlId="formHorizontalImg">
                        <Form.Label column sm={4}>Message Image:</Form.Label>
                        <Col>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                        </Col>
                    </Form.Group>
                    <Image src={img ? typeof img === 'object' ? URL.createObjectURL(img) : img : ""} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(Utils.operations.CREATE)}>
                    Close
        </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
        </Button>
            </Modal.Footer>
        </Modal>
    )
}
