import React from 'react';
import SearchPage from '../SearchPage/SearchPage.jsx'
import FavoriteList from '../FavoriteList/FavoriteList'

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchPage />
      <FavoriteList />
    </div>
  );
}

export default App;
