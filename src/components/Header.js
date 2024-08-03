import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        setIsAuthenticated(false); // Update authentication state
        navigate('/'); // Redirect to home page
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Todo App</Navbar.Brand>
                <Nav className="ml-auto">
                    {!isAuthenticated && (
                        <>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </>
                    )}
                    {isAuthenticated && (
                        <>
                            <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
                            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
