import React, { Fragment, useState } from 'react'
import MenuCard from '../MenuCard'
import '../Basics/CSS/style.css'
import Menu from '../MenuApi'
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)
  return (
  <Fragment>
    <MenuCard menuData = {menuData}/>
  </Fragment>
  )
}

export default Restaurant