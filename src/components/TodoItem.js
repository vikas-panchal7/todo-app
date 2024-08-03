import React, { useState } from 'react';
import axios from 'axios';
import { ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const TodoItem = ({ todo, onUpdate }) => {
    const [showModal, setShowModal] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/todos/${todo._id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            toast.info('Todo deleted successfully');
            onUpdate();
        } catch (error) {
            console.error('Error deleting todo', error);
        }
    };

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:8000/api/todos/${todo._id}`, { title: newTitle }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            toast.info('Todo updated successfully');
            onUpdate(); 
            handleClose();
        } catch (error) {
            console.error('Error updating todo', error);
        }
    };

    return (
        <>
            <ListGroup.Item>
                {todo.title}
                <Button variant="danger" onClick={handleDelete} className="float-end">
                    Delete
                </Button>
                <Button variant="warning" onClick={handleShow} className="float-end me-2">
                    Edit
                </Button>
            </ListGroup.Item>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEdit}>
                        <Form.Group controlId="formTodoTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mt-2'>
                            Save Changes
                        </Button>
                        <Button variant="secondary" onClick={handleClose} className="mt-2 ms-2">
                            Cancel
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TodoItem;
