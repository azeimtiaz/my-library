import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

type DeleteAlertProps = {
    onDeleteConfirmation : () => void
    onAuthorDeletionCancel : () => void
}

const DeleteAlert: React.FC<DeleteAlertProps> = (props) => {
    const [show] = useState(true);

    return (
        <Modal show={show}>
            <Modal.Body><h4>Are you sure?</h4></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.onAuthorDeletionCancel()}>
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