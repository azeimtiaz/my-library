import React, {FormEvent, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import * as Icon from 'react-feather';
import {IAuthor} from "../../../types/LibraryTypes";

type AuthorFormProps = {
    formTitle: string
    alertMessage: string
    onFormClose: () => void
    onAuthorAddition: (author: IAuthor) => void
}

const AuthorForm: React.FC<AuthorFormProps>= (props) => {
    const [newAuthorName, setNewAuthorName] = useState('');

    const handleAuthorNameChange = (name: string) => {
        setNewAuthorName(name);
    }

    const createNewAuthor = () => {
        if(newAuthorName === null || newAuthorName === '') {
            return;
        }
        const newAuthor: IAuthor = {name: newAuthorName};
        props.onAuthorAddition(newAuthor);
        setNewAuthorName('');
        props.onFormClose();
    }

    const handleOnFormSubmit = (event: FormEvent) => {
        event.preventDefault()

        if(props.formTitle === 'Create') {
            createNewAuthor();
        }
        if(props.formTitle === 'Update') {
            return;
        }
        return;
    }

    return (
        <div className="add-form pt-lg-4 pt-md-4 pt-sm-2 m-0">
            <Row className="p-0 m-0" >
                <Col xs={12} md={9}  className="form-title pb-0  pt-4 pe-0 me-0">
                    <label className="align-bottom">{props.formTitle} Author</label>
                    <Icon.XCircle className="my-2 float-lg-right text-end"
                                  onClick={props.onFormClose}
                                  color="#222222" cursor="pointer" size="22"/>
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={9}>
                    <Form className="pt-4 ms-4 pl-lg-5 pl-sm-5" onSubmit={handleOnFormSubmit}>
                        <Form.Group controlId="authorformTitle">
                            <Form.Label className="author-field-name">Name of the Author</Form.Label>
                            <label className="empty-name-alert text-danger">{props.alertMessage}</label>
                            <Form.Control className="author-input-box px-0 px-sm-0"
                                          type="text"
                                          value={newAuthorName}
                                          onChange={(event) =>
                                              handleAuthorNameChange(event.target.value)}/>
                        </Form.Group>
                        <div className="float-lg-right">
                            <Button className="create-btn" type="submit">
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