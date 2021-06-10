import React from 'react';
import {IAuthor} from "../../../types/LibraryTypes";
import Author from "./Author";

type AuthorListProps = {
    authors: IAuthor[]
    onEditRequest: () => void
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
    const {authors} = props;
    const showAuthor = () => {
        if (authors.length === 0) {
            return;
        }

        return authors.map((author: IAuthor, index: number) => {
            return <Author
                author={author}
                key={index}
                num={index + 1}
                onEditRequest={props.onEditRequest}/>
        });
    };

    return (
        <div className="px-0 py-0">
            {authors.length === 0 ?
                <label className='no-authors'>No authors listed here.</label> :
            <ul className="px-0 pt-2 list-unstyled">
                {showAuthor()}
            </ul>}
        </div>
    );
}

export default AuthorList;