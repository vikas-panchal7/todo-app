import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', { userName,email, password });
            toast.success('Registered successfully');
            navigate('/login');
        } catch (error) {
            console.error('Registration error', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">

            <Form.Group controlId="formEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter UserName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-2'>
                Register
            </Button>
        </Form>
    );
};

export default Register;
