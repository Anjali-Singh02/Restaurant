import React, { Fragment, useState } from 'react';
import MenuCard from '../MenuCard';
import '../Basics/CSS/style.css';
import Menu from '../MenuApi';
import Header from '../Header';

const uniqueList = [
	...new Set(
		Menu.map((curElement) => {
			return curElement.category;
		}),
	),
	'All',
];

const Restaurant = () => {
	const [menuData, setMenuData] = useState(Menu);
	const [menuList, setMenuList] = useState(uniqueList);
	const filterCategory = (category) => {
		if (category === 'All') {
			setMenuData(Menu);
			return;
		}
		const updatedList = Menu.filter((currElement) => {
			return currElement.category === category;
		});
		setMenuData(updatedList);
	};
	return (
		<>
			<Header filterCategory={filterCategory} menuList={menuList} />
			<MenuCard menuData={menuData} />
		</>
	);
};

export default Restaurant;
