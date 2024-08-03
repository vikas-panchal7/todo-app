import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddTodo = ({onUpdateTodos}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/todos', { title }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            toast.success('Todo Added successfully');
            setTitle("")
            onUpdateTodos();
        } catch (error) {
            console.error('Error adding todo', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group controlId="formTodo">
                <Form.Label>New Todo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter todo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-2'>
                Add Todo
            </Button>
        </Form>
    );
};

export default AddTodo;
