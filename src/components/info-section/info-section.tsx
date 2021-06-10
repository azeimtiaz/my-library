import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AuthorSection from "./author-section/AuthorSection";

const InfoSection: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row className="info-section">
                <Col xs={{ span: 12, order: 2 }}  md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                    <h1>Books</h1>
                </Col>
                <Col xs={{ span: 12, order: 1 }}  md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                    <AuthorSection />
                </Col>
            </Row>
        </Container>
    );
}

export default InfoSection;