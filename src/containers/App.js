import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'important'
            }, {
                id: 2,
                text: 'priority'
            }, {
                id: 3,
                text: 'finished'
            }],
            title: 'Tasks :'
        };
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
        return ( <div className = {
                style.TodoApp
            } >
            <
            Title title = {
                this.state.title
            }
            numberOfTasks = {
                this.state.data.length
            }
            /> <
            Todo list = {
                this.state.data
            }
            remove = {
                this.removeTodo.bind(this)
            }
            /> <
            TodoForm add = {
                this.addTodo.bind(this)
            }
            /> </div>
        );
    }
}

export default hot(module)(App);