import React, { Fragment }  from 'react'

const MyCard = () => {
  return (
    <Fragment>
    <div className='card-container '>
        <div className=' card '>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className='card-title'>Maggie</h2>
                <span className='card-description subtle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab corporis commodi pariatur explicabo a voluptatum error sint esse sed quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil fugit tenetur sapiente laborum rem est iure, soluta temporibus alias facilis ad!
                </span>
                <div className='card-read'>Read</div>
                <span className='card-tag subtle'>Order now</span>
            </div>
        </div>
    </div>
  </Fragment>
  )
}

export default MyCard