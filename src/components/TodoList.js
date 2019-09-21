import React from 'react';
import style from './TodoList.css';
import Todo from '../components/Todo';

const TodoList = props => (
    <ul className={style.task}>
        <Todo />
    </ul>
);

export default TodoList;