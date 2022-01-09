import React from "react";

const TemplateSidebar = ({ images, dragOver, onDrop }) => {
	const sidebarData = [
		{
			icon: "/assets/noun-template-1625218.png",
			text: "Templates",
		},
		{
			icon: "/assets/noun-text-1879171.png",
			text: "Text",
		},
		{
			icon: "/assets/noun-photo-1622564.png",
			text: "Photos",
		},
		{
			icon: "/assets/noun-video-1596879.png",
			text: "Videos",
		},
		{
			icon: "/assets/noun-audio-1338041.png",
			text: "Audios",
		},
		{
			icon: "/assets/noun-background-72958.png",
			text: "Background",
		},
		{
			icon: "/assets/noun-component-427497.png",
			text: "Elements",
		},
		{
			icon: "/assets/noun-folder-937538.png",
			text: "Assets",
		},
		{
			icon: "/assets/SettingS.png",
			text: "Settings",
		},
	];

	return (
		<div className="template_sidebar shadow d-flex">
			<div className="sidebar_left d-flex flex-column">
				{sidebarData.map((item, i) => {
					return (
						<div
							key={i}
							className={`d-flex justify-content-center flex-column align-items-center justify-content-center mb-4 ${
								i === 0 && "border-3 py-2 border-start border-danger px-2"
							}`}
						>
							<img src={item.icon} alt="" />
							<p className="text-secondary f12 mt-1 fw600 mb-0">{item.text}</p>
						</div>
					);
				})}
			</div>
			<div className="w-100">
				<div className="d-flex justify-content-between align-items-center w-100 py-3 px-4">
					<h4 className="text-light mb-0 text-white">Template</h4>
					<img src="/assets/Icon awesome-arrow-circle-left.png" alt="" />
				</div>

				<div className="all_photos pt-3">
					<div className="px-4">
						<div className="inp_cont">
							<input
								className="px-4 w-100"
								type="text"
								name=""
								id=""
								placeholder="Search templates..."
							/>
							<img src="/assets/Search B.png" alt="" />
						</div>
					</div>

					<div className="ps-2 pe-2">
						<p className="ps-2 ms-1 pt-3 pb-2 text-light mb-0">All Templates</p>

						<div className="images_container container-fluid pb-3">
							{images}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TemplateSidebar;
