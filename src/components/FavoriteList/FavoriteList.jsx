import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import { useEffect } from 'react';

function FavoriteList() {

 const favGiphs = useSelector(store => store.gifReducer);
 const dispatch = useDispatch();

    useEffect(() => {
        getFavorite();
    }, []);

    const getFavorite = () => {
        dispatch({type:'FETCH_FAVORITES'});
    }
   
    return (
        <div>
            {favGiphs.map((item) => {
                return (
                    <FavoriteItem key = {item.id} item={item} />
                );
            })}
        </div>
    )
}

export default FavoriteList

