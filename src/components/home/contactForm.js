import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { ToastNotification } from "../../utils/toastNotification";

const ContactForm = () => {
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

  const reset = () => {
    setFormData({
      full_name: "",
      country: "",
      email: "",
      contact_number: "",
      message: "",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}contact-form/`, formData)
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
  return (
    <form onSubmit={handleContactSubmit}>
      <div className="md:grid md:grid-cols-2 gap-x-12 pt-8">
        <div className="mb-5">
          <label htmlFor="" className="block mb-2 text-sm">
            Full Name *
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
            Country *
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
            Email *
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
            Contact *
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
          <label htmlFor="message" className="block mb-2 text-sm ">
            Message *
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
  );
};

export default ContactForm;
