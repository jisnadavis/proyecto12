import React, { useEffect, useReducer, useState } from 'react'
import { initialstate, productReducer } from '../Reducers/Productreducer'

export const Favourite = () => {
  const getInitialState = () => ({
    products:
      JSON.parse(localStorage.getItem('products')) || initialstate.products,
    favourite:
      JSON.parse(localStorage.getItem('favourite')) || initialstate.favourite
  })

  const [state, dispatch] = useReducer(productReducer, {}, getInitialState)
  const [favourites, setFavourites] = useState(state.favourite)

  useEffect(() => {
    const updateFavourites = () => {
      const updatedFavourites =
        JSON.parse(localStorage.getItem('favourite')) || []
      setFavourites(updatedFavourites)
    }

    // Add an event listener to listen for storage changes
    window.addEventListener('storage', updateFavourites)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('storage', updateFavourites)
    }
  }, [])

  return (
    <div className='favorite-container'>
      {favourites.length === 0 ? (
        <p>There are no favorite items</p>
      ) : (
        favourites.map((product) => (
          <div className='favorite-product' key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
          </div>
        ))
      )}
    </div>
  )
}
