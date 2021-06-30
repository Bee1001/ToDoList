import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';

function ToDo({ todo, index, completeToDo, removeToDo }) {
    const handleRemoveToDo = () => {
        removeToDo(todo.id);
    }
    const handleCheckBoxClick = () => {
        completeToDo(todo.id)
    }

    return (
        <div className="todo-box">
            <div className="todo-checkbox">
                <input 
                    type="checkbox" 
                    defaultChecked={ todo.completed ? true : false }
                    onChange={ handleCheckBoxClick }
                ></input>
            </div>
            <div className="todo-index">
                <span>{ index + 1 }</span>
            </div>
            <div className="todo-content">
                <span 
                    style={{ textDecoration: todo.completed ? 'line-through' : null }}
                >
                    { todo.task }
                </span>
            </div>
            <div className="todo-level">
               <span>{ todo.level === 0 ? 'Necessary' : 'Important'}</span>
            </div>
            <div className="todo-time">
                <span>{ todo.date }</span>
            </div>
            <div className="todo-action">
                <button className="btn-delete" onClick={ handleRemoveToDo }>
                    <FontAwesomeIcon icon={ faTrashAlt }/>
                </button>
            </div>
        </div>
    )
}

export default ToDo;
