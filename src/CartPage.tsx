import React from 'react';

interface IProps {
	products: any;
}

export const CartPage: React.FC<IProps> = ({products}) => {
	return (
		<>
			<h2>Cart!</h2>
			{/* <div className="products">
				{products.map((product: any) => {
					return (
						<div key={product.id}>
							<p className='product-title'>{product.title}</p>
							<img src={product.image} width='100'></img>
							<div className="product-action">
								<p>{product.price} €</p>
							</div>
						</div>
					);
				})}
			</div> */}
		</>
	);
};