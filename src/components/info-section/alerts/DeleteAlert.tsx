import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

type DeleteAlertProps = {
    onDeleteConfirmation : () => void
    onAuthorDeletionCancel : () => void
}

const DeleteAlert: React.FC<DeleteAlertProps> = (props) => {
    const [show] = useState(true);
    const handleClose = () => props.onDeleteConfirmation();

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body><h4>Are you sure?</h4></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => props.onDeleteConfirmation()}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteAlert;