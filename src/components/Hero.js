import React from "react";

const Hero = () => {
	return (
		<div>
			<div className="hero_container"></div>

			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="search_field">
								<h1 className="text-white f48 mb-3 text-center">Create anything today.</h1>
								<div className="hero_cont d-flex position-relative mt-2 w-100">
									<input
										className="w-100"
										type="text"
										name=""
										id=""
										placeholder="Search thousands of formats and designs"
									/>
									<p className="search_box d-none d-md-block">SEARCH BOX</p>
									<button>
										<img src="/Assets/Search.png" alt="" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
