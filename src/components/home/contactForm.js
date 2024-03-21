import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { ToastNotification } from "../../utils/toastNotification";

const ContactForm = () => {
	const [errorMsg, setErrorMsg] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [emptyAttachment, setEmptyAttachment] = useState(true);
	const [countries, setCountries] = useState([]);

	const [formData, setFormData] = useState({
		full_name: "",
		country: null,
		email: "",
		contact_number: "",
		message: "",
		selectedFile: null,
	});

	useEffect(() => {
		axios.options(`${API_URL}contact-form/`).then((res) => {
			setCountries(res.data.actions.POST.country.choices);
		});
	}, []);

	const reset = () => {
		setFormData({
			full_name: "",
			country: "",
			email: "",
			contact_number: "",
			message: "",
			selectedFile: null,
		});
	};

	const handleContactSubmit = (e) => {
		e.preventDefault();
		const contactFormData = new FormData();
		contactFormData.append("full_name", formData.full_name);
		contactFormData.append("country", formData.country);
		contactFormData.append("email", formData.email);
		contactFormData.append("contact_number", formData.contact_number);
		contactFormData.append("message", formData.message);
		contactFormData.append("file", formData.selectedFile);
		axios
			.post(`${API_URL}contact-form/`, contactFormData, {
				headers: {
					Authorization:
						"Basic" +
						window.btoa(
							`${process.env.REACT_APP_FRONTEND_USERNAME}:${process.env.REACT_APP_FRONTEND_PASSWORD}`
						),
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				ToastNotification.fire({
					icon: "success",
					title: "Successful!",
				});
			})
			.catch((err) => {
				ToastNotification.fire({
					icon: "warning",
					title: "Failed!",
				});
			});
		reset();
	};

	const handleFileChange = (event) => {
		if (event.target.files.length > 0) {
			setFormData({
				...formData,
				selectedFile: event.target.files[0],
			});
			console.log(event.target.files);
		}
	};

	const validateSelectedFile = () => {
		const MAX_FILE_SIZE = 5120; // 5MB

		if (!formData.selectedFile) {
			setIsSuccess(false);
			return;
		}

		// for file limit
		const fileSizeKiloBytes = formData.selectedFile.size / 1024;

		if (fileSizeKiloBytes > MAX_FILE_SIZE) {
			setErrorMsg("File size is greater than maximum limit");
			setIsSuccess(false);
			return;
		}

		setErrorMsg("");
		setIsSuccess(true);
	};

	useEffect(() => {
		if (formData.selectedFile != null) {
			validateSelectedFile();
			setEmptyAttachment(false);
		} else {
			// setIsSuccess(true);
			setEmptyAttachment(true);
		}
	}, [formData.selectedFile]);

	return (
		<form onSubmit={handleContactSubmit}>
			<div className="md:grid md:grid-cols-2 gap-x-12 pt-8">
				<div className="mb-5">
					<label htmlFor="" className="block mb-2 text-sm">
						Full Name <span className="text-red-600">*</span>
					</label>
					<input
						type="text"
						id="text"
						value={formData.full_name}
						onChange={(e) =>
							setFormData({
								...formData,
								full_name: e.target.value,
							})
						}
						className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
						placeholder="Enter your full name"
						required
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="" className="block mb-2 text-sm">
						Country <span className="text-red-600">*</span>
					</label>
					<select
						value={formData.country}
						onChange={(e) =>
							setFormData({
								...formData,
								country: e.target.value,
							})
						}
						className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
						required
					>
						<option value="" disabled hidden selected>
							Select a country
						</option>
						{countries.map((country, index) => (
							<option key={index} value={country.value}>
								{country.display_name}
							</option>
						))}
					</select>
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="block mb-2 text-sm">
						Email <span className="text-red-600">*</span>
					</label>
					<input
						type="email"
						id="email"
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
						className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="" className="block mb-2 text-sm">
						Mobile No. <span className="text-red-600">*</span>
					</label>
					<input
						type="number"
						id=""
						value={formData.contact_number}
						onChange={(e) =>
							setFormData({
								...formData,
								contact_number: e.target.value,
							})
						}
						className="shadow-sm  border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
						placeholder="Enter your mobile number"
						required
					/>
				</div>
			</div>

			<div className="mb-5">
				<label htmlFor="message" className="block mb-2 text-sm ">
					Message <span className="text-red-600">*</span>
				</label>
				<textarea
					id="message"
					rows="3"
					value={formData.message}
					onChange={(e) =>
						setFormData({
							...formData,
							message: e.target.value,
						})
					}
					className="block p-2.5 w-[85vw] text-sm   rounded-lg border border-gray-300"
					placeholder="Write your message here"
					required
				/>
				{/* <p className="text-xs">Max 500 characters</p> */}
			</div>

			{/* CV dropper */}

			<label
				htmlFor="dropzone-file"
				className="relative flex h-64 mb-5 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 "
			>
				<input
					id="dropzone-file"
					type="file"
					className="absolute left-0 top-0 mb-2 h-full w-full cursor-pointer text-sm font-semibold text-gray-500 dark:text-gray-400"
					onChange={handleFileChange}
				/>
				<div className="flex flex-col items-center justify-center pb-6 pt-5">
					<svg
						aria-hidden="true"
						className="mb-3 h-10 w-10 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
						></path>
						strokeLinejoin
					</svg>
					<p className="text-md mb-2 font-semibold text-gray-500 dark:text-gray-400">
						Upload Files (optional)
					</p>

					<br />
					{emptyAttachment ? (
						<p>&nbsp;</p>
					) : isSuccess ? (
						<p className="text-sm font-semibold text-green-600">
							Validation successful
						</p>
					) : (
						<p className="text-sm font-semibold text-red-600">
							&nbsp;{errorMsg}&nbsp;
						</p>
					)}
					<br />
					<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-semibold">Click to upload</span>{" "}
						or drag and drop
					</p>
					<p className="uppercase text-xs text-gray-500 dark:text-gray-400">
						Max file size: <b>5MB</b>
					</p>
				</div>
			</label>

			{isSuccess || emptyAttachment ? (
				<button
					type="submit"
					className="bg-transparent rounded-md py-2 px-6 border border-black mb-12  hover:bg-red-900 hover:text-white"
				>
					Submit
				</button>
			) : (
				<button
					disabled
					type="submit"
					className="bg-transparent rounded-md py-2 px-6 border border-neutral-400 text-neutral-400 mb-12"
				>
					Submit
				</button>
			)}
		</form>
	);
};

export default ContactForm;
