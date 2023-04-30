import React, { Fragment }  from 'react'

const MyCard = ({menuData}) => {
  // console.log(menuData);
  return (


    <Fragment>
      <section className='main-card--cointainer'>

   
      {menuData.map((curElement => {
        return (
          <>
          <div className='card-container' key={curElement.id}>
        <div className=' card '>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{curElement.id}</span>
                <span className='card-author subtle'>{curElement.category}</span>
                <h2 className='card-title'>{curElement.name}</h2>
                <span className='card-description subtle'>{curElement.description}
                </span>
                <div className='card-read'>Read</div>
                <img src={curElement.image} alt="images" className='card-media' />
                <span className='card-tag subtle'>Order now</span>
            </div>
        </div>
    </div>
          </>
        )
      }))}
      </section>
  </Fragment>
  )
}

export default MyCard