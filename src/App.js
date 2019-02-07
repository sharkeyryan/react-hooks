import React, { useState } from "react";
import { 
    Row, 
    Col, 
    Collection
} from 'react-materialize';
import './App.css';

import Form from "./Form";
import Todo from "./Todo";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='content'>
            <Row>
                <Col s={12} m={8} l={6} offset={'m2 l3'}>
                    <div>
                        <Collection header='ToDos'>
                            {todos.map((todo, index) => (
                                <Todo key={index}
                                      index={index}
                                      deleteTodo={deleteTodo}
                                      text={todo.text}
                                />
                            ))}
                        </Collection>
                    </div>
                </Col>
            </Row>

            <Row className='todo-input'>
                <Col s={12} 
                     m={8} 
                     l={6}
                     className=''
                     offset={'m2 l3'}>
                    <Form className addTodo={addTodo} />
                </Col>
            </Row>
        </div>
    );
};

export default App;