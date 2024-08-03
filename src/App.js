import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { HomePage } from './components/HomePage';
import Layout from './components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodosPage from './components/TodosPage';
function App() {
    return (
        <>
        <ToastContainer />
        <Router>
            <Routes>
                <Route path="/register" element={<Layout><Register /></Layout>} />
                <Route path="/login" element={  <Layout> <Login /> </Layout>} />
                <Route path="/todos" element={<>
                    <Layout>
                        <TodosPage />
                    </Layout>

                </>} />
                <Route path="/" element={<Layout> <HomePage /></Layout>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
