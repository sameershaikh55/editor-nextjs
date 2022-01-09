import Link from "next/link";
import React from "react";

const Sidebar = ({ isOpen, ClickEvent }) => {
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
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				left: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="logo">
				<Link href="home">Logo</Link>
			</div>
			<img
				onClick={ClickEvent}
				src="/Assets/cross.svg"
				alt=""
				className="CrossBTn"
			/>
			<ul>
				{navigations.map((item, i) => {
					return (
						<li className="fw600 text-white f28 pointer" key={i}>
							<Link onClick={ClickEvent} href={item.link}>
								{item.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
