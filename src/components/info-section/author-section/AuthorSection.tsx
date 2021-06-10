import React, {useState} from 'react';
import {Col, Row, Toast} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorList from "./AuthorList";
import {IAuthor} from "../../../types/LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AddAuthor from "./AddAuthor";
import ToastAlert from "../alerts/ToastAlert";

const AuthorSection: React.FC = () => {
    const authors: IAuthor[] = [{name: 'Author 1 name'}, {name: 'Author 2 name'}, {name: 'Author 3 name'}];

    const [showAuthorForm,setShowAuthorForm] = useState(false);
    const [formTitle,setFormTitle] = useState('');

    const handleFormClose = () => setShowAuthorForm(false);

    const handleEditRequest = () => {
        setFormTitle('Update');
        setShowAuthorForm(true);
        console.log('hello');
    }

    const handleAuthorAddition = () => {
        setFormTitle('Create');
        setShowAuthorForm(true)
    }

    return (
        <div className="px-lg-4 px-md-3 px-sm-2 px-1">
            <Row>
                <Col className="section-title">
                    <AuthorTitle />
                </Col>
            </Row>
            <Row>
                <Col className="text-start pt-2">
                     <AuthorList authors={authors}
                                 onEditRequest={handleEditRequest}/>
                </Col>
            </Row>
            <Row className="add-author mx-0 px-0">
                <Col className="py-1 px-0 mx-0  w-auto col-3" onClick={handleAuthorAddition}>
                    <AddAuthor />
                </Col>
            </Row>
            <Row>
                <Col className="form-section px-0">
                    {showAuthorForm ?
                        <AuthorForm formTitle={formTitle}
                                    onformClose={handleFormClose} /> : null}
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                    <ToastAlert />
                </Col>
            </Row>
        </div>
    );
};

export default AuthorSection;