import React, { useState } from 'react'
import s from './TodoPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, toggleTodo } from '../../store/features/todo/todoSlice';

function TodoPage() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);

    function onSubmitHandler() {
        if (input.length < 6) return;

        let todo = {
            id: uuidv4(),
            todo: input,
            isComplete: false,
        }

        dispatch(addTodo(todo));
        setInput('');
    }

    function onDeleteHandler(e, id) {
        e.preventDefault();
        dispatch(deleteTodo(id));
    }

    function onToggleHandler(e, id) {
        e.preventDefault();
        dispatch(toggleTodo(id));
    }

    return <>
        <div className={s.wrapper}>
            <div className={s.form}>
                <input value={input} type="text" placeholder='Add todo...' onChange={(e) => setInput(e.target.value)} />
                <button className={s.button}
                    onClick={onSubmitHandler}>add</button>
            </div>
            <ul>
                {
                    todos?.map(({ id, todo, isComplete }) => {
                        return <a key={id} onClick={(e) => onToggleHandler(e, id)}>
                            <p style={
                                {
                                    textDecoration: isComplete ? 'line-through' : ''
                                }
                            }>{todo}</p>
                            <button className={s.delete_button}
                                onClick={(e) => onDeleteHandler(e, id)}>X</button>
                        </a>
                    })
                }
            </ul>
        </div >
    </>
}

export default TodoPage