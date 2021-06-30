import React from 'react';
import ToDo from '../ToDo/ToDo';
import './ToDoList.css';

function ToDoList({ todos, completeToDo, removeToDo }) {
    const elemToDo = todos.map((todo, index) => {
        return  <ToDo 
                    key={ todo.id } 
                    todo={ todo } 
                    index={ index }
                    removeToDo={ removeToDo }
                    completeToDo={ completeToDo }
                />
    })
    return (
        <div className="todo-list-container">
            <div className="todo-list-wrapper">
                { elemToDo.length ? elemToDo : 'No task available' }
            </div>
        </div>
    )
}

export default ToDoList;
