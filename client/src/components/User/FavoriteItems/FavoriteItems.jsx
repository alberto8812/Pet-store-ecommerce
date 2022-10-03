import React from 'react';
import { useSelector } from 'react-redux';

export default function FavoriteItems() {
    const favProducts = useSelector(state => state.favorite);
    

  return (
    <div>FavoriteItems</div>
  )
}
