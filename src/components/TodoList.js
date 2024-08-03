import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({todos,onUpdateTodos}) => {
    return (
        <ListGroup>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onUpdate={onUpdateTodos} />
            ))}
        </ListGroup>
    );
};

export default TodoList;
