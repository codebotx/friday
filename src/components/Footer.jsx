import React from 'react'

export default function Footer() {
	return (
		<div className="fixed-bottom">
			<footer id='footer '>

				<div className=" py-3 mx-1 " style={{ textAlign: 'center', fontSize: '14px' }}>
					<div className='icons my-1' >

						<a href="http://github.com/" className="  p-2 text-decoration-none text-secondary ">
							<i className="bi bi-github"></i>
						</a>

						<a href="http://instagram.com/" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-instagram"></i>
						</a>

						<a href="mailto:hr@queenbots.com" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-envelope-open-fill"></i>
						</a>

						<a href="https://www.linkedin.com/in/" className="p-2 text-decoration-none text-secondary">
							<i className="bi bi-linkedin"></i>
						</a>

					</div>
					<div>
						Copyright © 2022 <a className='foot' style={{ textDecoration: 'none' }} href="https://queenbots.com/"> Queenbots</a>. All rights reserved.
					</div>
				</div>
			</footer>
		</div>

	)
}