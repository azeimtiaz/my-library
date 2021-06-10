import React from 'react';
import * as Icon from "react-feather";
import {Col, Row, Toast} from "react-bootstrap";

type ToastAlertProps = {
    alertMessage: string
}

const ToastAlert: React.FC<ToastAlertProps> = (props) => {
    const{alertMessage} = props;

    return (
        <Toast>
            <Toast.Body>
                <Row>
                    <Col className="my-auto col-10">
                        <h5>{alertMessage}</h5>
                    </Col>
                    <Col className="col-1">
                        <Icon.CheckCircle className="text-end my-1 mr-auto"
                                          color="green" cursor="pointer" size="27"/>
                    </Col>
                </Row>
            </Toast.Body>
        </Toast>
    );
}

export default ToastAlert;