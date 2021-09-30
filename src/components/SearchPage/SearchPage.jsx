import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function SearchPage(){

    const [newSearch, setNewSearch] = useState('');

    const addNewSearch = (event) => {
        event.preventDefault();
        console.log('New search: ', newSearch);
        dispatchEvent({ type: 'FETCH_SEARCH', payload: newSearch })
    }

    return(
        <>
        <form onSubmit={addNewSearch}>
            <input 
                required
                placeholder='E.G.: Cats'
                value={newSearch}
                onChange={(event) => setNewSearch(event.target.value)}
            /><br />
            <button type='submit'>Search!</button>
        </form>
        <h1>Here are your Gifs:</h1>
        <img src={newSearch}></img>
        </>
    )
}

export default