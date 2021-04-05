import React from 'react';
import cart from './images/shopping-cart.png';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="logo">
				<Link to='/'>
					#Shopshopshop
				</Link>
			</div>
			<div className="action">
				<Link to='/cart'>
					<p className="number">0</p>
					<img src={cart} width='30'/>
				</Link>
			</div>
		</div>
	);
};