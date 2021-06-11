import React, {useEffect, useState} from 'react';
import {Col, Row, Toast} from "react-bootstrap";
import AuthorList from "./AuthorList";
import {IAuthor} from "../../../types/LibraryTypes";
import AuthorForm from "./AuthorForm";
import AuthorTitle from "./AuthorTitle";
import AddAuthor from "./AddAuthor";
import ToastAlert from "../alerts/ToastAlert";
import DeleteAlert from "../alerts/DeleteAlert";

const AuthorSection: React.FC = () => {
    const authorName: IAuthor[] = [];
    const [authors, setAuthors] = useState(authorName);

    const [showAuthorForm, setShowAuthorForm] = useState(false);
    const [formTitle, setFormTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [deleteAlertVisibility, setDeleteAlertVisibility] = useState(false);
    const [authorToastVisibility, setAuthorToastVisibility] = useState(false);

    const [authorToDeleteIndex, setAuthorToDeleteIndex] = useState(-1);
    const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState(-1);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);

    const handleFormClose = () => setShowAuthorForm(false);

    const handleEditRequest = (index: number) => {
        setAuthorToUpdateIndex(index);
        setFormTitle('Update');
        setShowAuthorForm(true);
    }

    const handleAuthorUpdate = (name: string) => {
        if (!authors || authorToUpdate === null) {
            return;
        }

        const listOfAuthors: IAuthor[] = authors.slice();
        listOfAuthors.splice(authorToUpdateIndex, 1, {name: name});
        setAuthors(listOfAuthors);
        setAuthorToUpdateIndex(-1);
        setAlertMessage('Author Updated');
        setShowAuthorForm(false);
        setAuthorToUpdate(null);
    }

    useEffect(() => {
        if (authorToUpdateIndex === -1) {
            return;
        }
        setAuthorToUpdate(authors[authorToUpdateIndex]);
    }, [authorToUpdateIndex]);

    const handleDeleteRequest = (index: number) => {
        setAuthorToDeleteIndex(index);
        setDeleteAlertVisibility(true);
    }

    const handleDeleteConfirmation = () => {
        const listOfAuthors: IAuthor[] = authors.slice();
        listOfAuthors.splice(authorToDeleteIndex, 1);
        setAuthors(listOfAuthors);
        setAuthorToastVisibility(true);
        setAlertMessage('Author Deleted!');
        setDeleteAlertVisibility(false);

        setAuthorToastVisibility(true);
        setTimeout(() => {
            setAuthorToastVisibility(false);
        }, 3000);
    }

    const handleDeleteCancellation = () => {
        setDeleteAlertVisibility(false);
    }

    const handleAddAuthorRequest = () => {
        setFormTitle('Create');
        setShowAuthorForm(true);
    }

    const handleAuthorAddition = (author: IAuthor) => {
        const listOfAuthors: IAuthor[] = authors.slice();
        listOfAuthors.push(author);
        setAuthors(listOfAuthors);
        setAlertMessage('Author Created');

        setAuthorToastVisibility(true);
        setTimeout(() => {
            setAuthorToastVisibility(false);
        }, 3000);
    }

    const renderAlerts = () => {
        if (authorToastVisibility) {
            return (
                <ToastAlert alertMessage={alertMessage}/>
            );
        }
        if (deleteAlertVisibility) {
            return (
                <DeleteAlert onDeleteConfirmation={handleDeleteConfirmation}
                             onAuthorDeletionCancel={handleDeleteCancellation}/>
            );
        }
    }

    return (
        <div className="px-lg-4 px-md-3 px-sm-2 px-1">
            <Row>
                <Col className="section-title">
                    <AuthorTitle/>
                </Col>
            </Row>
            <Row>
                <Col className="text-start pt-2">
                    <AuthorList authors={authors}
                                onEditRequest={handleEditRequest}
                                onDeleteRequest={handleDeleteRequest}/>
                </Col>
            </Row>
            <Row className="add-author mx-0 px-0">
                <Col className="py-1 px-0 mx-0  w-auto col-3" onClick={handleAddAuthorRequest}>
                    <AddAuthor/>
                </Col>
            </Row>
            <Row>
                <Col className="form-section px-0">
                    {showAuthorForm ?
                        <AuthorForm formTitle={formTitle}
                                    onAuthorAddition={handleAuthorAddition}
                                    onFormClose={handleFormClose}
                                    alertMessage={alertMessage}
                                    authorToUpdate={authorToUpdate}
                                    onAuthorUpdate={handleAuthorUpdate}/> : null}
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                    {renderAlerts()}
                </Col>
            </Row>
        </div>
    );
};

export default AuthorSection;