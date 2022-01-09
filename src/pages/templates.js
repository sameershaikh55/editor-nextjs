import React, { Component } from "react";
import Header2 from "../components/Header2";
import TemplateSidebar from "../components/TemplateSidebar";
import WhiteSpace from "../components/WhiteSpace";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import TemplateBtns from "../components/templateBtns";

class Templates extends Component {
	state = {
		tasks: [
			{
				category: "wip",
				picture: "/assets/IMG_2568.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2569.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2570.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2571.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2572.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2574.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_2575.png",
			},
			{
				category: "wip",
				picture: "/assets/IMG_25745.png",
			},
			{
				category: "wip",
				picture: "/assets/Picture2.png",
			},
			{
				category: "wip",
				picture: "/assets/6re6qzyr.png",
			},
		],
		crop: {
			unit: "%",
			width: 30,
			aspect: 16 / 9,
		},
	};

	onDragStart = (ev, id) => {
		ev.dataTransfer.setData("id", id);
	};

	onDragOver = (ev) => {
		ev.preventDefault();
	};

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("id");

		let completedTask = this.state.tasks.filter(
			(task) => task.category === "complete"
		);

		let tasks = this.state.tasks.filter((task) => {
			if (task.picture == id) {
				task.category = cat;
			} else {
				if (completedTask.length === 2) {
					task.category = "wip";
				}
			}

			return task;
		});

		this.setState({
			...this.state,
			tasks,
		});
	};

	getCroppedImg(image, crop, fileName) {
		const canvas = document.createElement("canvas");
		const pixelRatio = window.devicePixelRatio;
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		const ctx = canvas.getContext("2d");

		canvas.width = crop.width * pixelRatio * scaleX;
		canvas.height = crop.height * pixelRatio * scaleY;

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		ctx.imageSmoothingQuality = "high";

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width * scaleX,
			crop.height * scaleY
		);

		return new Promise((resolve, reject) => {
			canvas.toBlob(
				(blob) => {
					if (!blob) {
						//reject(new Error('Canvas is empty'));
						console.error("Canvas is empty");
						return;
					}
					blob.name = fileName;
					window.URL.revokeObjectURL(this.fileUrl);
					this.fileUrl = window.URL.createObjectURL(blob);
					resolve(this.fileUrl);
				},
				"image/jpeg",
				1
			);
		});
	}

	// If you setState the crop in here you should return false.
	onImageLoaded = (image) => {
		this.imageRef = image;
	};

	onCropChange = (crop, percentCrop) => {
		// You could also use percentCrop:
		// this.setState({ crop: percentCrop });
		this.setState({ crop });
	};

	onCropComplete = (crop) => {
		this.makeClientCrop(crop);
	};

	async makeClientCrop(crop) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(
				this.imageRef,
				crop,
				"newFile.jpeg"
			);
			this.setState({ croppedImageUrl });
		}
	}

	render() {
		const { crop, croppedImageUrl } = this.state;

		var tasks = {
			wip: [],
			complete: [],
		};

		this.state.tasks.forEach((t) => {
			if (t.category === "wip") {
				tasks["wip"].push(
					<div
						key={t.picture}
						onDragStart={(e) => this.onDragStart(e, t.picture)}
						draggable
						className="col-6 draggable"
					>
						<img className="rounded-3 w-100" src={t.picture} alt="" />
					</div>
				);
			} else {
				tasks["complete"].push(
					<div
						key={t.picture}
						onDragStart={(e) => this.onDragStart(e, t.picture)}
						draggable
						className="col-4 mb-5"
					>
						<ReactCrop
							src={t.picture}
							crop={crop}
							ruleOfThirds
							onImageLoaded={this.onImageLoaded}
							onComplete={this.onCropComplete}
							onChange={this.onCropChange}
						/>
						{/* <img className="rounded-3 w-100" src={t.picture} alt="" /> */}
					</div>
				);
			}
		});

		let wipImages = (
			<div
				onDragOver={(e) => this.onDragOver(e)}
				onDrop={(e) => {
					this.onDrop(e, "wip");
				}}
				className="row gx-3 gy-3"
			>
				{tasks.wip}
			</div>
		);

		let completedImages = (
			<div
				onDragOver={(e) => this.onDragOver(e)}
				onDrop={(e) => this.onDrop(e, "complete")}
				className="row justify-content-center align-items-center droppable"
			>
				{tasks.complete}
				{/* <div className="col-4">
					{croppedImageUrl && (
						<img alt="Crop" src={croppedImageUrl} className="Crop_" />
					)}
				</div> */}
			</div>
		);

		return (
			<div className="template_bg">
				<Header2 />
				<div className="d-flex">
					<TemplateSidebar images={wipImages} />
					<WhiteSpace images={completedImages} />
					<TemplateBtns />
				</div>
			</div>
		);
	}
}

export default Templates;
