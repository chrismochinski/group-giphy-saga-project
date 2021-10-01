import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchPage() {

    const [newSearch, setNewSearch] = useState('');
    const dispatch = useDispatch();

    // const handleSearch = () => {
    //     setNewSearch({ newSearch })
    // }

    const addNewSearch = (event) => {
        event.preventDefault();

        console.log('New search: ', newSearch);
        dispatch({ type: 'FETCH_SEARCH', payload: newSearch })
        setNewSearch('');
    }

    return (
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

export default SearchPage;