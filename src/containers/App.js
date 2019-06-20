import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: uuid.v4(),
                    text: "123"
                },
                {
                    id: uuid.v4(),
                    text: "123"
                },
                {
                    id: uuid.v4(),
                    text: "123"
                }
            ]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };

        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    render() {
        return (
            <div>
                <Title name="My Title" todoListCount={this.state.data.length}/>
                <div className={style.TodoApp}>
                    <TodoList data={this.state.data} removeTodo={this.removeTodo}/> 
                </div>
                <div>
                    <TodoForm addTodo={this.addTodo}/> 
                </div>
            </div>
        );
    }
}

export default hot(module)(App);