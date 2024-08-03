import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-auto">
            <Container>
                <Row>
                    <Col>
                        <p className="mb-0">© {new Date().getFullYear()} MyTodoApp. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
