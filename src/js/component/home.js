import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					{myArray.map((item, index) => {
						return (
							<div key={index} className="col-sm">
								<Card
									title={item.cardTitle}
									description={item.cardText}
									button={item.linkDescr}
									image={item.image}
								/>
							</div>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}
const myArray = [
	{
		image:
			"https://images.unsplash.com/photo-1601412436405-1f0c6b50921f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZnVzZWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		cardTitle: "I Want to Code For Life",
		cardText:
			"I decided that I really do love to code and i could make a career out of it. I looked for an oppurtunity and took the coding bootcamp at MDC. I was confused at first and dropped out before fully paying.",
		link: "https://www.mdc.edu/",
		linkDescr: "MDC"
	},
	{
		image:
			"https://images.unsplash.com/photo-1590005194861-af70fa800956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zaXRpdml0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		cardTitle: "I Can Do This",
		cardText:
			"After MDC, I still felt a void. I missed learning how to code so I signed up for Colt Steeles Udemy course.",
		link: "https://www.udemy.com",
		linkDescr: "Udemy"
	},
	{
		image:
			"https://images.unsplash.com/photo-1544816565-c199d6f5d2d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2Vla3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		cardTitle: "I Start At 4Geeks",
		cardText:
			"Udemy helped me to see that I really am good at coding. I was inspired to go to the 4Geeks Academy because I liked that  school.",
		link:
			"https://4geeksacademy.co/?gclid=Cj0KCQiA2af-BRDzARIsAIVQUOe5P0A7Mz3Yr6izRbq_cqhCYctgHd_6aQKxDbqcSja0Nqe6VQJKslIaAnASEALw_wcB",
		linkDescr: "4Geeks"
	},
	{
		image:
			"https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW1hemluZyUyMGNhcmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		cardTitle: "I Can Have An Amazing Career",
		cardText:
			"After graduating 4Geeks, they provide great career support. I can get a job making 40k a year",
		link: "https://www.linkedin.com/",
		linkDescr: "Linkdn"
	}
];
