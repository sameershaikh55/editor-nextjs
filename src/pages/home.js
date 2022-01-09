import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero />
			<Slider />
		</>
	);
};

export default Home;
