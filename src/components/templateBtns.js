import React from "react";

const TemplateBtns = () => {
	return (
		<div className="btns_container position-absolute d-flex align-items-center">
			<button className="btn rounded-3 bg-white shadow p-2">
				<img src="/assets/noun-page-1052537.png" alt="" />
			</button>
			<button className="btn rounded-3 bg-white shadow p-2 ms-3">
				<img src="/assets/noun-duplicate-3676786.png" alt="" />
			</button>
			<button className="btn rounded-3 bg-white shadow p-2 ms-3">
				<img src="/assets/noun-full-screen-1211947.png" alt="" />
			</button>
			<div className="ms-3 shadow d-flex align-items-center bg-white rounded-3">
				<button className="btn p-2">
					<img src="/assets/Icon awesome-minus.png" alt="" />
				</button>
				<input
					type="text"
					name=""
					id=""
					className="h-100 border-0 bg-white fw600"
					value="10%"
				/>
				<button className="btn p-2">
					<img src="/assets/Icon awesome-plus.png" alt="" />
				</button>
			</div>
		</div>
	);
};

export default TemplateBtns;
