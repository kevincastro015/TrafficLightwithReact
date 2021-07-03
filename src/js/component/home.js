import React from "react";
import "relative/path/to/stylesheet.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="traffic-light">
			<div className="light red">Red</div>
			<div className="light yellow">Yellow</div>
			<div className="light green">Green</div>
		</div>
	);
}
