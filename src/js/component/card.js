import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
	image: PropTypes.string
};
