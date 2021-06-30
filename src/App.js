import './App.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header/header';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import Search from './components/Search/search';

function App() {
    const [ todos, setToDos ] = useState([]);
    const [ statusDisplay, setStatusDisplay] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ searchResult, setSearchResult ] = useState([]);
    const [ isSortUp, setSort ] = useState(true);
    
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem('todo-list'));
        if (storageTodos) {
            setToDos(storageTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(todos));
    }, [todos])

    const addToDo = (todo) => {
        setToDos([todo, ...todos]);
    }

    const removeToDo = (id) => {
        setToDos(todos.filter(todo => todo.id !== id))
    }

    const searchToDo = (searchTerm) => {
        console.log(searchTerm);
        setSearchTerm(searchTerm);
        if(searchTerm !== '') {
            const newToDos = todos.filter(todo => {
                return Object.values(todo)
                    .join(' ')
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            })
            setSearchResult(newToDos);
        } else {
            return todos;
        }

    }

    const completeToDo = (id) => {
        setToDos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }
    
    const handleSort = () => {
        setSort(!isSortUp);

        if(isSortUp) {
            const newToDos = todos.sort((a, b) => {
                let textA = a.task.toLowerCase();
                let textB = b.task.toLowerCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
            setToDos(newToDos);
        } else {
            const newToDos = todos.sort((a, b) => {
                let textA = a.task.toLowerCase();
                let textB = b.task.toLowerCase();
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            })
            setToDos(newToDos);
        }

    }

    const onToggleForm = () => {
        setStatusDisplay(!statusDisplay);
    }
    let toDoForm = statusDisplay === true ? <ToDoForm addToDo={ addToDo }/> : '';

    return (
        <div className="App">
            <Header />
            <div className="taskheader-container">
                <div className="taskheader-wrapper">
                    <div className="control-container">
                        <button className="btn-add" 
                                onClick={ onToggleForm }
                        >Add task</button>
                    </div>
                    <Search searchToDo={ searchToDo }/>
                    <button className="btn-sort" onClick={ handleSort } >
                        <FontAwesomeIcon className="icon-arrow" icon={ faLongArrowAltUp } size="2x" style={{ color: !isSortUp ? '#d3c0f9' : ''}} />
                        <FontAwesomeIcon className="icon-arrow" icon={ faLongArrowAltDown } size="2x" style={{ color: isSortUp ? '#d3c0f9' : '' }}/>
                    </button>
                </div>
            </div>
            { toDoForm }
            <ToDoList todos={ searchTerm < 1 ? todos : searchResult } removeToDo={ removeToDo } completeToDo={ completeToDo }/>
        </div>
    );
}

export default App;
