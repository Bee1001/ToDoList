import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.css'

function Search(props) {
    const searchInput = useRef('');
    const handleSearch = () => {
        props.searchToDo(searchInput.current.value);
    }

    return (
        <div className="search-container">
            <form className="search-form">
                <input 
                    ref={ searchInput }
                    className="search" 
                    placeholder="Search here..." 
                    onChange={ handleSearch }
                ></input>
                <button className="btn-search">
                    <FontAwesomeIcon icon={ faSearch } />
                </button>
            </form>
        </div>
    )
}

export default Search
