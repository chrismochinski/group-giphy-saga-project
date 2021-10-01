import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SearchPage() {

    const gifResponse = useSelector(store => store.gifReducer);
    console.log('gifResponse is:', gifResponse)

    const [newSearch, setNewSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setNewSearch(newSearch)
    }

    const addNewSearch = (event) => {
        event.preventDefault();

        console.log('New search: ', newSearch);
        dispatch({ type: 'FETCH_SEARCH', payload: newSearch })
        setNewSearch('');
    }
    //TODO MAP THRU 10 GIPHY RESPONSES


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

            {/* <h2>{JSON.stringify(gifResponse)}</h2> */}
            <ul>
                {gifResponse.map((gifItem) => (
                    <div className="gifListItem">
                        <li>
                            {gifItem.id}
                        </li>
                        <li key={gifItem.id}>

                            <img src={gifItem.images.downsized_medium.url} />
                            <button>Favorite</button>

                        </li>
                    </div>
                ))}

            </ul>
            {/* <img src={gifResponse.downsized_medium}></img> */}
        </>
    )
}

export default SearchPage;