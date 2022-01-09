import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {
	const navigationNextRef = React.useRef(null);

	const slider = [
		{
			img: "/Assets/Group 1.png",
			text: "Banners",
		},
		{
			img: "/Assets/Group -1.png",
			text: "Wipe Away",
		},
		{
			img: "/Assets/Group -2.png",
			text: "Stories",
		},
		{
			img: "/Assets/Group -3.png",
			text: "Native Ads",
		},
		{
			img: "/Assets/Group -4.png",
			text: "Standard Video",
		},
		{
			img: "/Assets/Group -5.png",
			text: "Video + Endcard",
		},
		{
			img: "/Assets/Group 10.png",
			text: "Branded videos",
		},
		{
			img: "/Assets/Group 101.png",
			text: "Meta Views",
		},
	];

	return (
		<div className="slider_container">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h5 className="fw500">Maybe you are looking for ...</h5>

							<div className="position-relative w-100">
								<button
									className=" border-0 bg-transparent arrow_next"
									ref={navigationNextRef}
								>
									<img src="/Assets/arrow.svg" alt="" />
								</button>

								<Swiper
									onInit={(swiper) => {
										swiper.params.navigation.nextEl = navigationNextRef.current;
										swiper.navigation.init();
										swiper.navigation.update();
									}}
									navigation={{
										nextEl: navigationNextRef.current,
									}}
									spaceBetween={10}
									breakpoints={{
										640: {
											slidesPerView: 2,
										},
										768: {
											slidesPerView: 4,
										},
										1024: {
											slidesPerView: 5,
										},
									}}
									className="mySwiper mt-4"
								>
									{slider.map((item, i) => {
										return (
											<SwiperSlide key={i}>
												<img src={item.img} alt="" />
												<p className="ms-4 mt-1">{item.text}</p>
											</SwiperSlide>
										);
									})}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
