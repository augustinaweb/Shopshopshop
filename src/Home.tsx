import React from 'react';
import { 
	BrowserRouter as Router,	
	Link
} from 'react-router-dom';

interface IProps {
	products: any;
}

export const Home: React.FC<IProps> = ({products}) => {
	return (
		<Router>
			<>
				<h1>Buy buy buy!</h1>
				<div className="products">
					{products.map((product: any) => {
						return (
							<Link to="/product" key={product.id}>
								<div className="product">
									<p className='product-title'>{product.title}</p>
									<img src={product.image} width='100'></img>
									<div className="product-action">
										<p>{product.price} €</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</>
		</Router>
	);
};