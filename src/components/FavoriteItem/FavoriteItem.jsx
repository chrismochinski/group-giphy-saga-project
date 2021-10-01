import React from 'react'
import {useState} from 'react';
import useDispatch from 'react-redux';

function FavoriteItem() {

   const dispatch = useDispatch();

   const addFavorite = () => [
       dispatch ({type: 'ADD_FAVORITE', payload:fav})
   ]
    
    return (
        <div>
            <li></li>
   
        </div>
    )
}



export default FavoriteItem

