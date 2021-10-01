import React from 'react'
import {useDispatch} from 'react-redux';

function FavoriteItem({item}) {
   
   const dispatch = useDispatch();

   const addFavorite = (favGiph) => {
       dispatch ({type: 'ADD_FAV', payload:favGiph})
   
   } 

   const getFavorite = () => {
       dispatch({type:'FETCH_FAVORITES'});
   }

    return (
        <div>
            <p>{item.title}</p>
            <img src= {item.link} />
            <p>Category</p>
        </div>
    )
}
/**
 * SELECT "name" FROM "category"
 * PENDING JOIN "favorites" ON "category"."id" = "favorites"."category_id"
 * WHERE "id" = "category_id"
 */


export default FavoriteItem
