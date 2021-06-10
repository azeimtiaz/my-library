import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';

type AuthorFormProps = {
    createFormClose: () => void
}

const AuthorForm: React.FC<AuthorFormProps>= (props) => {
    return (
        <div className="pt-5 pe-9 me-5">
            <Row className="p-0 m-0" >
                <Col xs={12} md={9}  className="form-title pb-0 mt-0 pe-3 me-4">
                    <label className="text-start">Create Author</label>
                    <Icon.XCircle className="form-close text-end my-1" onClick={props.createFormClose}
                                  color="#222222" cursor="pointer" size="27"/>
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={9}  className="author-title pe-5 me-5 ps-4 ms-4 pt-4">
                    <Form className="add-form">
                        <Form.Group controlId="authorformTitle">
                            <Form.Label className="author-field-name">Name of the Author</Form.Label>
                            <Form.Control className="author-input-box" type="text"/>
                        </Form.Group>
                        <div className="text-lg-end">
                            <Button className="create-btn" type="submit">
                                Create
                            </Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default AuthorForm;