import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';

type AuthorFormProps = {
    formTitle: string
    createFormClose: () => void
}

const AuthorForm: React.FC<AuthorFormProps>= (props) => {

    return (
        <div className="add-form pt-lg-4 pt-md-4 pt-sm-2 m-0">
            <Row className="p-0 m-0" >
                <Col xs={12} md={9}  className="form-title pb-0  pt-4 pe-0 me-0">
                    <label className="align-bottom">{props.formTitle} Author</label>
                    <Icon.XCircle className="my-2 float-end text-end mx-1"
                                  onClick={props.createFormClose}
                                  color="#222222" cursor="pointer" size="22"/>
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={9}>
                    <Form className="pt-4 ms-4">
                        <Form.Group controlId="authorformTitle">
                            <Form.Label className="author-field-name">Name of the Author</Form.Label>
                            <label className="empty-name-alert text-danger">Author name cannot be empty</label>
                            <Form.Control className="author-input-box px-0 px-sm-0" type="text"/>
                        </Form.Group>
                        <div className="text-lg-end">
                            <Button className="create-btn float-end float-sm-end" type="submit">
                                {props.formTitle}
                            </Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default AuthorForm;