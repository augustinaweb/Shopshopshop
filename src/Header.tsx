import React from 'react';
import cart from './images/shopping-cart.png';
import { 
	BrowserRouter as Router,	
	Link
} from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<Router>
			<div className="header">
				<div className="logo">
			#Shopshopshop
				</div>
				<div className="action">
					<Link to='/cart'>
						<img src={cart} width='30'/>
					</Link>
				</div>
			</div>
		</Router>
	);
};