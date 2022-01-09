import Link from "next/link";
import React from "react";

const Header = ({ ClickEvent }) => {
	const navigations = [
		{
			text: "Home",
			link: "home",
		},
		{
			text: "Templates",
			link: "about",
		},
		{
			text: "Creative Assets",
			link: "token",
		},
		{
			text: "Tutorials",
			link: "roadmap",
		},
		{
			text: "Brand Kits",
			link: "roadmap",
		},
		{
			text: "My Projects",
			link: "roadmap",
		},
	];

	return (
		<div className="header_container">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center w-100">
								<div className="logo_container">
									<h3 className="text-white">LogoHere</h3>
								</div>

								<div className="d-flex d-lg-none">
									<img
										className="pointer"
										onClick={ClickEvent}
										src="/Assets/hamburger.svg"
										alt=""
									/>
								</div>

								<div className="d-none d-lg-flex align-items-center">
									<ul className="list-unstyled d-flex align-items-center mb-0">
										{navigations.map((item, i) => {
											return (
												<li
													className="fw500 f14 text-white me-4 pointer"
													key={i}
												>
													<Link href="/" className="text-white">{item.text}</Link>
												</li>
											);
										})}
										<li className="me-4">
											<img src="/Assets/Setting.png" alt="" />
										</li>
										<li className="d-flex flex-column avatar_">
											<img src="/Assets/Ellipse 1.png" alt="" />
											<p className="mb-0 text-white">Avatar</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
