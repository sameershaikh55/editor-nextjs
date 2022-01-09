import React from "react";

const Header2 = () => {
	return (
		<div className="header_container2 bg-white">
			<div className="px-4 w-100">
				<div className="container-fluid w-100">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center w-100">
								<div className="d-flex">
									<div className="logo_container">
										<h3 className="text-danger">
											<span className="fw-bold">Logo</span>Here
										</h3>
									</div>

									<div className="d-flex align-items-center ms-5">
										<p className="fw-bold f14 mb-0">New Design</p>
										<p className="ms-4 fw-bold f14 mb-0">My Projects</p>
										<div className="ms-4">
											<img src="/assets/noun-undo-1.png" alt="" />
											<img
												className="ms-3"
												src="/assets/noun-undo-1438114.png"
												alt=""
											/>
										</div>
										<div className="d-flex align-items-center ms-4 border-start border-2 border-gray ps-4">
											<span className="fw600">Untitled</span>
											<img
												className="ms-3"
												src="/assets/Icon awesome-check-circle.png"
												alt=""
											/>
											<span className="ms-3 f12 text-secondary">
												Changes saved
											</span>
										</div>
									</div>
								</div>

								<div className="d-flex align-items-center">
									<img src="/assets/Icon awesome-share-alt.png" alt="" />

									<div className="header_right_btns d-flex">
										<button className="text-white border-0 px-3 ms-3">
											<img
												className="me-1"
												src="/assets/Group 444.png"
												alt=""
											/>
											Preview
										</button>
										<button className="text-white border-0 px-3 ms-3">
											<img
												className="me-1"
												src="/assets/Icon feather-download.png"
												alt=""
											/>
											Download
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header2;
