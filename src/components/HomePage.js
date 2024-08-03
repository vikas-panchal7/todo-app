import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const HomePage = () => {
    return (
        <>
            <Container >
                <h1 className="mb-4">Welcome to the Todo App</h1>
                <p>Please <a href="/login">login</a> or <a href="/register">register</a> to manage your todos.</p>
            </Container>
        </>
    )
}
