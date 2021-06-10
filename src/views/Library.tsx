import React from 'react';
import Welcome from "../components/welcom-section/Welcome";
import {Container} from "react-bootstrap";
import InfoSection from "../components/info-section/info-section";

const Library: React.FC = () => {
    return (
        <Container fluid>
            <Welcome />
            <InfoSection />
        </Container>
    );
}

export default Library;