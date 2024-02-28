import React, { useState, useEffect } from "react";
import { API_URL } from "../constants";
import useFetch from "../utils/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Products = () => {
	const { data: products, error: products_error } = useFetch(
		`${API_URL}products/`
	);

	const [countries, setCountries] = useState([]);

	const [formData, setFormData] = useState({
		full_name: "",
		country: null,
		email: "",
		contact_number: "",
		message: "",
	});

	useEffect(() => {
		axios.options(`${API_URL}contact-form/`).then((res) => {
			setCountries(res.data.actions.POST.country.choices);
		});
	}, []);

	const handleContactSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${API_URL}contact-form/`, formData)
			.then((res) => {
				alert("Form submitted successfully");
			})
			.catch((err) => {
				alert("Form submission failed");
			});
	};

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div
			className="snap-always snap-start pt-10 px-5"
			style={{ backgroundColor: "#F6F6F6" }}
		>
			<h1
				className="md:text-center md:text-5xl text-3xl md:pt-20 pb-16"
				style={{ color: "#711D1F" }}
			>
				<b>Our</b> products
			</h1>
			<div className="overflow-x-hidden">
				{products ? (
					<Slider {...settings}>
						{products.map((item, index) => (
							<div
								key={index}
								className="grayscale hover:grayscale-0 hover:scale-110 transition active:scale-90"
							>
								<a
									href={item.url}
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="md:max-h-16 max-h-12 inline object-contain mx-auto "
										src={item.logo}
										alt="products"
									/>
								</a>
							</div>
						))}
					</Slider>
				) : products_error ? (
					<p className="text-center">{products_error}</p>
				) : (
					<p className="text-center">loading</p>
				)}
			</div>
			<div className="w-[85vw] mx-auto md:pt-20 pt-12">
				<h1 className="text-4xl font-bold">Contact Us</h1>

				<form onSubmit={handleContactSubmit}>
					<div className="md:grid md:grid-cols-2 gap-12 pt-8">
						<div className="mb-5">
							<label htmlFor="" className="block mb-2 text-sm">
								Full Name
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
								Country
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
								<option value="">Select a country</option>
								{countries.map((country, index) => (
									<option key={index} value={country.value}>
										{country.display_name}
									</option>
								))}
							</select>
						</div>
						<div className="mb-5">
							<label
								htmlFor="email"
								className="block mb-2 text-sm"
							>
								Email
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
								Contact
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
								placeholder="Enter your contact information"
								required
							/>
						</div>
						<div className="mb-5">
							<label
								htmlFor="message"
								className="block mb-2 text-sm "
							>
								Message
							</label>
							<textarea
								id="message"
								rows="2"
								value={formData.message}
								onChange={(e) =>
									setFormData({
										...formData,
										message: e.target.value,
									})
								}
								className="block p-2.5 w-[85vw] text-sm   rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder=""
							></textarea>
							<p className="text-xs">Max 500 characters</p>
						</div>
					</div>
					<button
						type="submit"
						className="bg-transparent rounded-md py-2 px-6 border border-black mb-12  hover:bg-red-900 hover:text-white"
					>
						Submit
					</button>
				</form>

				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.59720814210306!2d103.857979!3d1.3086513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e1d186e02d%3A0x2242714927df7e83!2sJalan%20Besar%20Plaza!5e0!3m2!1sen!2snp!4v1708320121399!5m2!1sen!2snp"
					height="300"
					style={{ width: "85vw", paddingBottom: "30px" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Products;
