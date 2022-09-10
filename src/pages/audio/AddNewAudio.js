import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBack from "@mui/icons-material/ArrowBack";
import * as Yup from "yup";
import {
	Box,
	Button,
	Container,
	Link,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { Deblur } from "@mui/icons-material";

const theme = createTheme();

export default function AddNewAudio() {
	const aduioURL = process.env.REACT_APP_PLANT_Q_APP_API_URL + "audio";

	let navigate = useNavigate();
	let location = useLocation();
	const [thumnail, setThumnail] = useState();
	const [thumnailName, setThumnailName] = useState();
	const [audioFileName, setAudioFileName] = useState();
	const [soundCludURl, setSoundCludURl] = useState();
	const [audioFile, setAudioFile] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// document.body.style.backgroundImage = "url()";
		// if(location.state.){

		// console.log(location);
		// console.log(location.state)
		//console.log(location.state.token);
		if (location && location.state && location.state.token !== "Token") {
			navigate("/login");
		} else if (
			location == null ||
			location.state == null ||
			location.state.token == null
		) {
			navigate("/login");
		}
		// }
	}, []);

	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.required("Title is required")
			.max(128, "Exceeded maximum character length of 128"),
		artistName: Yup.string()
			.required("Artist Name is required")
			.max(128, "Exceeded maximum character length of 128"),
		owner: Yup.string()
			.required("Owner Name is required")
			.max(128, "Exceeded maximum character length of 128"),
		//audioFile: Yup.file().required("Mp3 File is required"),
	});
	const fileValidation = Yup.object().shape({
		file: Yup.object().shape({
			audioFile: Yup.string().required()
		}).label('File')
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: "onChange",
	});

	const backToListing = () => {
		navigate("/audioListing", { state: { token: "Token" } });
	};
	const handleChangeThumnail = (event) => {
		let file = event.target.files[0];
		setThumnailName(file.name);
		setThumnail(file);
	};
	const handleChangeAudioFile = (event) => {
		let file = event.target.files[0];

		setAudioFile(file);
		setAudioFileName(file.name);
	};
	const handleChangeASoundCloud = (event) => {
		setSoundCludURl(event.te);
	};
	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	}
	const onSubmit = async (formData) => {
		setIsLoading(true);
		console.log(formData);
		var data = await JSON.stringify({
			title: formData.title,
			artistName: formData.artistName,
			owner: formData.owner,
			soundcloudurl: formData.soundcloudurl,
			audioFileName: audioFileName ? audioFileName : "SoundCloud.mp3",
			thumnail: "https://api.planetqproductions.com/storage/uploads/files/" + thumnail.name,
			thumnailFileName: thumnail.name,
			thumnailMedia: await getBase64(thumnail).then((response) => {
				return response.split(",")[1];
			}),
			audioFile: formData.soundcloudurl == '' ? "https://api.planetqproductions.com/storage/uploads/files/audio/" + audioFileName : "https://api.planetqproductions.com/storage/uploads/files/audio/Test.mp3",
			audioMedia: audioFile ? await getBase64(audioFile).then((response) => {
				return response;
			}) : null,
		});
		console.log(data);
		var config = {
			method: "post",
			url: "https://api.planetqproductions.com/api/audio",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};
		const promise = axios(config)
			.then((response) => {
				if (response.status == 200) {
					//console.log('response', response);
					navigate("/audiolisting", { state: { token: "Token" } });
					setIsLoading(false);
					//toast.success("Audio item added successfully!");
				}
			})
			.catch(function (error) {
				console.log(error);
				setIsLoading(false);
				if (error.status == 413) {
					toast.error("Your File greater than maximum Uploading Limit");
				} else {
					toast.error("Error");
				}
			});
		toast.promise(promise, {
			pending: {
				render() {
					return "Loading...";
				},
				icon: false,
			},
			success: {
				render() {
					return `Added successfully!`;
				},
				// other options
				icon: "🟢",
			},
		});

		// console.log("Audio item added successfully!");
		// console.log("title", data.title);
		// console.log("artistName", data.artistName);
		// console.log("owner", data.owner);
		// console.log("thumnail", thumnail);
		// console.log("audio", audioFile);
		// console.log("base 64",await getBase64(audioFile));
		//console.log("RecievedData ",location.state.name);
	};
	return (
		<ThemeProvider theme={theme}>
			<AppBar position="relative">
				<Toolbar>
					{/* <CameraIcon sx={{ mr: 2 }} /> */}
					<Typography variant="h6" color="inherit" noWrap>
						Planet Q Production
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					style={{ background: "white", margin: "2%" }}
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container>
						<Grid container spacing={2}>
							<Grid item xs={8}></Grid>
							<Grid item xs={4}>
								<Button
									variant="outlined"
									startIcon={<ArrowBack />}
									style={{ float: "right", marginBottom: "-65px" }}
									onClick={backToListing}
								>
									Back to listing
								</Button>
							</Grid>
						</Grid>

						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ my: 3 }}>
								<Typography color="textPrimary" variant="h4">
									Add new item
								</Typography>
							</Box>
							<Typography
								color="textPrimary">
								Enter Title
							</Typography>
							<TextField
								fullWidth
								margin="normal"
								name="title"
								type="text"
								className="form-control input-group m-b-0"
								placeholder="Enter title"
								{...register("title")}
							/>
							<span style={{ color: "#C92938" }}>
								{" "}
								{errors.title && errors.title.message}
							</span>
							<Typography
								color="textPrimary">
								Enter Artist
							</Typography>
							<TextField
								fullWidth
								margin="normal"
								name="artistName"
								placeholder="Enter artist name"
								type="text"
								{...register("artistName")}
							/>
							<span style={{ color: "#C92938" }}>
								{" "}
								{errors.artistName && errors.artistName.message}
							</span>
							<Typography
								color="textPrimary">
								Owner Name
							</Typography>
							<TextField
								fullWidth
								margin="normal"
								name="owner"
								type="text"
								placeholder="Enter owner name"
								{...register("owner")}
							/>
							<span style={{ color: "#C92938" }}>
								{" "}
								{errors.owner && errors.owner.message}
							</span>

							<Typography
								color="textPrimary">
								Thumbnail
							</Typography>
							<Typography
								className="text-center upload-resume m-auto"
								style={{
									border: "1px dashed #696871",
									padding: "51px",
									height: "10em",
									margin: "4px",
									marginBottom: "15px !important",
									borderRadius: "8px",
								}}
							>
								<input
									id="raised-button-file"
									multiple
									type="file"
									accept="image/png, image/jpeg"
									onChange={handleChangeThumnail}
								/>
								<span style={{ color: "#C92938" }}>
									{" "}
									{errors.audioFile && errors.audioFile.message}
								</span>
								<Typography>
									<label htmlFor="raised-button-file">
										<Typography>
											{!thumnailName && (
												<Link className="link-color f-13 " underline="hover">
													Select Thumnail
												</Link>
											)}
											<Link
												className="sub-text-color f-13 textEllipse w-200"
												underline="hover"
											>
												{thumnailName}
											</Link>
										</Typography>
									</label>
								</Typography>
							</Typography>
							<div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}>-</div>
							<Typography
								color="textPrimary"
								variant="h6">
								"Soundcloud URL" OR "Upload Audio File"
							</Typography>
							<div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}>-</div>
							<Typography
								color="textPrimary">
								Sound Cloud URL
							</Typography>
							<TextField
								fullWidth
								margin="normal"
								name="title"
								type="text"
								placeholder="Enter SoundCloud ID"
								{...register("soundcloudurl")}
							/>
							<span style={{ color: "#C92938" }}>
								{" "}
								{errors.owner && errors.owner.message}
							</span>
							<Typography
								color="textPrimary">
								Upload Audio
							</Typography>
							<Typography
								className="text-center upload-resume m-auto"
								style={{
									border: "1px dashed #696871",
									padding: "51px",
									height: "10em",
									margin: "4px",
									borderRadius: "8px",
								}}
							>
								<input
									type="file"
									accept="audio/*"
									name="audioFile"
									onChange={handleChangeAudioFile}
								/>

								<Typography>
									<label htmlFor="raised-button-file">
										<Typography>
											<Link
												className="sub-text-color f-13 textEllipse w-200"
												underline="hover"
											>
												{audioFileName}
											</Link>
										</Typography>
									</label>
								</Typography>
							</Typography>
							<Box sx={{ py: 2 }}>
								<Button
									color="primary"
									fullWidth
									size="large"
									type="submit"
									variant="contained"
									disabled={isLoading}
								>
									Save
								</Button>
							</Box>
						</form>
					</Container>
				</Box>
			</main>
		</ThemeProvider>
	);
}
