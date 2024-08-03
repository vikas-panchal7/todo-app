import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/todos', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleUpdateTodos = () => {
        fetchTodos();
    };

    return (
        <>

            <AddTodo onUpdateTodos={handleUpdateTodos} />
            <TodoList todos={todos} onUpdateTodos={handleUpdateTodos} />
        </>

    );
};

export default TodosPage;
