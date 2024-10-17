import React from 'react'
import './Rating.css'

export const Rating = ({ rating, OnRate }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'filled' : ''}
          onClick={() => OnRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  )
}
