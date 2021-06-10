import React from 'react';
import * as Icon from "react-feather";

const AddAuthor: React.FC= () => {
    return (
        <div className="align-items-baseline">
            <Icon.Plus className="text-left " color="#0842a3" size="22"/>
            <label className="add-author-label px-1"> Add Author </label>
        </div>
    );
}

export default AddAuthor;