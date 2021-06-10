import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import LibraryImg from '../../assets/images/welcome-image.webp';

const Welcome: React.FC = () => {
    return (
        <Row className='welcome-section'>
            <Col xs={12} className='text-center py-2'>
                <h1>My Library</h1>
            </Col>
            <Col xs={12} className='px-0'>
                <Image src={LibraryImg} alt="Library Image"/>
            </Col>
            <Col xs={12} className='py-lg-2 py-md-1 py-sm-1 px-lg-4 '>
                <label>
                    Photo by
                    <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText" target='_blank'>
                        Anna Hunko </a>
                    on
                    <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                       target='_blank'>
                        Unsplash</a>
                </label>
            </Col>
        </Row>
    )
};

export default Welcome;