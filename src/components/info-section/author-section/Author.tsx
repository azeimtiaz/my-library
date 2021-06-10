import React from 'react';
import {IAuthor} from "../../../types/LibraryTypes";
import {Col, Row} from "react-bootstrap";
import * as Icon from 'react-feather';

type AuthorProps = {
    num: number
    author: IAuthor
    onEditRequest: (index: number) => void
    onDeleteRequest: (index: number) => void
}

const Author: React.FC<AuthorProps>= (props) => {
    const {num, author} = props;

    return (
        <li className="Author-div px-0 py-0">
            <Row className="Author-cont py-1 px-0 mx-0">
                <Col className="px-0 col-lg-10">
                    <label>{num}. {author.name}</label>
                </Col>
                <Col className="edit-item m-0 p-0 text-lg-right col-lg-1">
                    <Icon.Edit color="#ff8b12" size="25" onClick={() => props.onEditRequest(num - 1)}/>
                </Col>
                <Col className="delete-item m-0 pr-2 text-lg-right col-lg-1">
                    <Icon.Trash2 color="#bb1d1e" size="25" onClick={() => props.onDeleteRequest(num - 1)}/>
                </Col>
            </Row>
        </li>
    );
}

export default Author;