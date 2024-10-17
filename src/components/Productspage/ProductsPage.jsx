import React, { useReducer } from 'react'
import { initialstate, productReducer } from '../Reducers/Productreducer'

import './Productpage.css'
import { Rating } from '../Rating/Rating'

export const ProductsPage = () => {
  const getInitialState = () => ({
    products:
      JSON.parse(localStorage.getItem('products')) || initialstate.products,
    favourite:
      JSON.parse(localStorage.getItem('favourite')) || initialstate.favourite
  })

  const [state, dispatch] = useReducer(productReducer, {}, getInitialState)
  const handleLikeToggle = (id) => {
    dispatch({ type: 'Toggle_favorite', payload: { id } })
  }
  console.log(state.products)
  console.log('the products ', state.favourite)
  return (
    <div className='products-container'>
      <div className='productlist'>
        {state.products &&
          state.products.map((product) => (
            <div key={product.id} className='productcard'>
              <img src={product.image} alt={product.name}></img>
              <h2>{product.name}</h2>
              <Rating
                rating={product.rating}
                OnRate={(rating) =>
                  dispatch({
                    type: 'Rate_product',
                    payload: { id: product.id, rating }
                  })
                }
              />
              <button
                className={`like -button ${product.liked ? 'liked' : ''}`}
                onClick={() => handleLikeToggle(product.id)}
              >
                {product.liked ? (
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/4926/4926589.png'
                    alt='dislike'
                    className='dislike'
                  ></img>
                ) : (
                  <img
                    src='https://i.pinimg.com/originals/18/ee/9e/18ee9e76491674862a2be57f12bd25c5.png'
                    alt='like'
                    className='like'
                  ></img>
                )}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
