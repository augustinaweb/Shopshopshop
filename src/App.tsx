import React, { useEffect, useState } from 'react';
import './app.css';
import { Header } from './Header';
import { Home } from './Home';
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage';
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

export const App: React.FC = () => {
	const [products, setProducts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res=>res.json())
			.then(res => {
				setProducts(res);
				setIsLoaded(true);
				console.log(res);
			})
			.catch(error => {
				setError(error);
				setIsLoaded(true);
			});
	}, []);
	
	if (error) {
		return <div>Error: {error}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Router>
				<div className="app">
					<Header />
					<Switch>
						<Route path="/">
							<Home products={products} />
						</Route>
						<Route path="/product">
							<ProductPage />
						</Route>
						<Route path="/cart">
							<CartPage />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
	
	
};
