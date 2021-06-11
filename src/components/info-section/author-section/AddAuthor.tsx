import React from 'react';
import * as Icon from "react-feather";
import {Row} from "react-bootstrap";

const AddAuthor: React.FC= () => {
    return (
        <Row className="align-items-baseline">
            <Icon.Plus className="text-left " color="#0842a3" size="22"/>
            <label className="add-author-label px-1"> Add Author </label>
        </Row>
    );
}

export default AddAuthor;