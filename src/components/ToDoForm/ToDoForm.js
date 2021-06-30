import React, { useState } from 'react';
import './ToDoForm.css';

function ToDoForm(props) {
    const [ todo, setToDo ] = useState({ 
        task: '',
        level: 0,
        completed: false 
    });
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        if (todo.task.trim()) {
            props.addToDo({...todo, id: id, date: new Date().toDateString() });

            setToDo({ ...todo, task: '' })
        }
    }

    return (
        <div className="todo-form-container">
            <div className="todo-form-wrapper">
                <form className="todo-form" onSubmit={ handleOnSubmit }>
                    <div className="todo-form-input">
                        <label>Task</label>
                        <input  
                                type="text"
                                name="task"
                                value={ todo.task }
                                onChange={ e => { setToDo({ ...todo, task: e.target.value }) } }
                        ></input>
                    </div>
                    <div className="todo-form-input">
                        <label>Level</label>
                        <select 
                            className="todo-form-select" 
                            name="level"
                            value={ todo.level } 
                            onChange={ e => { setToDo({ ...todo, level: e.target.value }) } }>

                            <option value={0}>Necessary</option>
                            <option value={1}>Important</option>
                        </select>
                    </div>
                    <button className="btn-add" type="submit">Add Task</button>
                    <button className="btn-cancel">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default ToDoForm;
