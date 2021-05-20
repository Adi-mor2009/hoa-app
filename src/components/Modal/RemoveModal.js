import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import Utils from '../../shared/Utils';

export default function RemoveModal({show, handleClose, modalTitle, showError, error, handleSubmit, text}) {
    return (
        <Modal show={show} onHide={() => handleClose(Utils.operations.DELETE)} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showError ? <Alert variant="danger">{error}</Alert> : null}
                        {text}
                    </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleSubmit}>
                    Yes
                    </Button>
                <Button variant="primary" onClick={() => handleClose(Utils.operations.DELETE)}>
                    No
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}
