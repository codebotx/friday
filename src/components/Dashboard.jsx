import React from 'react'
import office from '../assets/img/office.svg'
import piggy from '../assets/img/Piggy.svg'
import moon from '../assets/img/moonlight.svg'
import '../assets/css/dashboard.css'

export default function Dashboard() {
	const [dashboardcontent, setDashboardcontent] = React.useState('')
	const [dynamiclink, setDynamiclink] = React.useState('https://anubhavp.dev')
	const [heading, setHeading] = React.useState('')
	const [isDisplayed, setIsDisplayed] = React.useState("first")

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (isDisplayed === "first") {
				setIsDisplayed("second");
			} else if (isDisplayed === "second") {
				setIsDisplayed("third");
			} else {
				setIsDisplayed("first");
			}
		}, 10000);
		return () => clearInterval(interval);
	}, [isDisplayed]);
	React.useEffect(() => {
		if (isDisplayed === "first") {
			setHeading(<>
				<h1>PRODUCTS<span></span><span className="text-secondary"> & SERVICES</span></h1>
			</>
			)
			setDashboardcontent("We provide industry standard solutions and services with expertise in blockchain development, cloud services, testing automation, web - development, mobile development, and other software solutions. Our objective is to bring creative and shrewd solutions to solve business problems.")
			setDynamiclink("https://anubhavp.dev")
		} else if (isDisplayed === "second") {
			setHeading(<>
				<h1>WEB<span> </span><span className="text-secondary">3</span></h1>
			</>
			)
			setDashboardcontent(" The potential of Blockchain is collosal, which makes it the pinnacle of current world innovation. We work with wallet development, Central Bank of Digital Currency, blockchain development and other web3 industry services.")
			setDynamiclink("https://anubhavp.dev/dapps")
		} else if (isDisplayed === "third") {
			setHeading(<>
				<h1>TRAINING<span> & </span><span className="text-secondary">EDUCATION</span></h1>
			</>
			)
			setDashboardcontent("We provide industry standard training on blockchain, software development, and AI. Get a chance to learn software development by working in real-world products such as crypto wallet, crypto-currency, exchange platform, and other web and mobile applications with our highly experienced developers.")
			setDynamiclink("https://anubhavp.dev/nft")
		}
	}, [isDisplayed])
	return (
		<>
			<section className=" p-5 cdin  ">
				<div className="container ">

					<div className="d-sm-flex align-items-center justify-content-between mainc">
						<div className="img-home">
							<h1 className="heading">QUEEN<span></span><span className="text-secondary">BOTS</span></h1>
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
