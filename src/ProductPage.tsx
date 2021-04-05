import React from 'react';

interface IProps {
	product: product;
}

interface product {
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export const ProductPage: React.FC<IProps> = ({product}) => {
	return (
		<>
			<div className="product-page">
				<div className="product-item">
					<h2>{product.title}</h2>
					<div>
						<div className="product-image">
							<img src={product.image} width='100'></img>
						</div>
						<div className="product-controls">
							<p>{product.price} €</p>
							<div>
								<div className="units">
									<label htmlFor="units">Units: </label>
									<input type="number" min="1" id="units"/>
								</div>
								<button className="add-to-cart">Add to cart</button>
								<p>More in {product.category} category...</p>
							</div>
						</div>
					</div>
					<p><strong>Description: </strong>{product.description}</p>
				</div>
			</div>
		</>
	);
};