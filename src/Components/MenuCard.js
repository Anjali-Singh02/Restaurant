import React, { Fragment } from 'react';

const MyCard = ({ menuData }) => {
	// console.log(menuData);
	return (
		<Fragment>
			<section className="main-card--cointainer">
				{menuData.map((curElement) => {
					const { id, category, name, description, image } =
						curElement;
					return (
						<>
							<div className="card-container" key={id}>
								<div className=" card ">
									<div className="card-body">
										<span className="card-number card-circle subtle">
											{id}
										</span>
										<span className="card-author subtle">
											{category}
										</span>
										<h2 className="card-title">{name}</h2>
										<span className="card-description subtle">
											{description}
										</span>
										<div className="card-read">Read</div>
										<img
											src={image}
											alt="images"
											className="card-media"
										/>
										<span className="card-tag subtle">
											Order now
										</span>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</Fragment>
	);
};

export default MyCard;
