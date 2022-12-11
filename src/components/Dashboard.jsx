import React from 'react'
import moon from '../assets/img/moonlight.svg'
import '../assets/css/dashboard.css'

export default function Dashboard() {
	return (
		<>
			<section className=" p-5 cdin  ">
				<div className="container ">

					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">FRI<span></span><span className="text-secondary">DAY</span></h1>
							<p className="lead my-4">
								The potential of Blockchain is collosal, which makes it the pinnacle of current world innovation. We build blockchains!
							</p>
							{/* <a href="https://anubhavp.dev/">
								<button className="btn btn-sm prbt">Learn More</button>
							</a> */}
						</div>
						<img className="img-fluid w-50 d-none d-sm-block" src={moon} alt="in office" />
					</div>
				</div>
			</section>
		</>
	)
}
