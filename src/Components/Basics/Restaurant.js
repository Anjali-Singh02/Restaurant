import React, { Fragment, useState } from 'react'
import MenuCard from '../MenuCard'
import '../Basics/CSS/style.css'
import Menu from '../MenuApi'
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)

  const filterCategory = (category) => {
    const updatedList = Menu.filter((currElement => {
      return currElement.category === category;
    }))
    setMenuData(updatedList)
  }
  return (
  <>
<nav className='navbar'>
  <div className="btn-group">
    <button className="btn-group__item" onClick={()=> filterCategory('breakfast')}>Breakfast</button>
    <button className="btn-group__item" onClick={()=> filterCategory('lunch')}>Lunch</button>
    <button className="btn-group__item" onClick={()=> filterCategory('evening')}>Evening</button>
    <button className="btn-group__item" onClick={()=> filterCategory('dinner')}>Dinner</button>
    <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
  </div>
</nav>
    <MenuCard menuData = {menuData}/>
  </>
  )
}

export default Restaurant