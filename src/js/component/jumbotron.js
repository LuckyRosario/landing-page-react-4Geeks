import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Pamela Rosario</h1>
			<p className="lead">
				Take a sneak peek at my journey to becoming a Junior Software
				Developer.
			</p>
			<hr className="my-4" />
			<p>Browse to start your own journey.</p>
			<a className="btn btn-success btn-med" href="#" role="button">
				Learn more
			</a>
		</div>
	);
}
