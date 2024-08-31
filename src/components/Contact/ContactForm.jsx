import React, { useMemo, useState } from "react";
import Select from "react-select";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaUsers,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import { getNames } from "country-list";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import Brandpartners from "../Home/BrandPartners";
import Maps from "../Maps/Maps";

const ContactForm = () => {
  const options = useMemo(
    () => getNames().map((name) => ({ label: name, value: name })),
    []
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDayMode, setIsDayMode] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    if (actionMeta.name === "country") {
      setFormData({
        ...formData,
        country: selectedOption ? selectedOption.value : "",
      });
    } else if (actionMeta.name === "services") {
      setFormData({
        ...formData,
        services: selectedOption ? selectedOption.map((option) => option.value) : [],
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email Address is required";
    if (!formData.phone) formErrors.phone = "Phone Number is required";
    if (!formData.country) formErrors.country = "Country is required";
    if (formData.services.length === 0)
      formErrors.services = "At least one service must be selected";
    if (!formData.message) formErrors.message = "Message is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const emailData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        services: formData.services.join(", "),
        message: formData.message,
      };

      emailjs
        .send("service_56hkzgp", "template_0bkylai", emailData, "-Ffo8QsjcCGkhKbTc")
        .then(() => {
          setShowConfirmation(true);
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
        });
    }
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    navigate("/");
  };

  const toggleMode = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 ${
        isDayMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full transition duration-300 hover:bg-blue-600"
      >
        Toggle {isDayMode ? "Night" : "Day"} Mode
      </button>
      <form
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 max-w-3xl w-full space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Business Enquiry
        </h2>

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 dark:focus-within:border-blue-300 rounded-lg">
          <FaUser className="text-gray-500 dark:text-gray-300 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 dark:text-white leading-tight focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 dark:focus-within:border-blue-300 rounded-lg">
          <FaEnvelope className="text-gray-500 dark:text-gray-300 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 dark:text-white leading-tight focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 dark:focus-within:border-blue-300 rounded-lg">
          <FaPhone className="text-gray-500 dark:text-gray-300 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 dark:text-white leading-tight focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 dark:focus-within:border-blue-300 rounded-lg">
          <Select
            name="country"
            options={options}
            value={options.find((option) => option.value === formData.country)}
            onChange={handleSelectChange}
            className="w-full text-gray-800 dark:text-white"
            placeholder="Country"
            styles={{
              control: (provided, state) => ({
                ...provided,
                backgroundColor: "transparent",
                borderColor: state.isFocused
                  ? "blue"
                  : "gray",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "blue",
                },
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: isDayMode ? "white" : "#2d3748",
              }),
              menuList: (provided) => ({
                ...provided,
                padding: 0,
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected
                  ? "#3182ce"
                  : state.isFocused
                  ? "#63b3ed"
                  : isDayMode
                  ? "white"
                  : "#4a5568",
                color: state.isSelected
                  ? "white"
                  : isDayMode
                  ? "#2d3748"
                  : "#e2e8f0",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: isDayMode ? "black" : "white",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: isDayMode ? "#4a5568" : "#a0aec0",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: isDayMode ? "#4a5568" : "#a0aec0",
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
              }),
            }}
          />
        </div>
        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

        <div className="space-y-2">
          <label className="block text-gray-800 dark:text-white font-medium">
            How Can We Help? *
          </label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <FaCode className="text-gray-500 dark:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
              <span>Virtual Tour</span>
              <input
                type="checkbox"
                name="services"
                value="Software Development"
                checked={formData.services.includes("Software Development")}
                onChange={() => {
                  const newServices = formData.services.includes(
                    "Software Development"
                  )
                    ? formData.services.filter(
                        (service) => service !== "Software Development"
                      )
                    : [...formData.services, "Software Development"];
                  setFormData({ ...formData, services: newServices });
                }}
                className="form-checkbox"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaUsers className="text-gray-500 dark:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
              <span>Video Shooting</span>
              <input
                type="checkbox"
                name="services"
                value="Team Extension (Staff Augmentation)"
                checked={formData.services.includes(
                  "Team Extension (Staff Augmentation)"
                )}
                onChange={() => {
                  const newServices = formData.services.includes(
                    "Team Extension (Staff Augmentation)"
                  )
                    ? formData.services.filter(
                        (service) =>
                          service !== "Team Extension (Staff Augmentation)"
                      )
                    : [...formData.services, "Team Extension (Staff Augmentation)"];
                  setFormData({ ...formData, services: newServices });
                }}
                className="form-checkbox"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaLaptopCode className="text-gray-500 dark:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
              <span>Photography</span>
              <input
                type="checkbox"
                name="services"
                value="Dedicated Software Team"
                checked={formData.services.includes("Dedicated Software Team")}
                onChange={() => {
                  const newServices = formData.services.includes(
                    "Dedicated Software Team"
                  )
                    ? formData.services.filter(
                        (service) => service !== "Dedicated Software Team"
                      )
                    : [...formData.services, "Dedicated Software Team"];
                  setFormData({ ...formData, services: newServices });
                }}
                className="form-checkbox"
              />
            </label>
            <label className="flex items-center space-x-2">
              <FaTools className="text-gray-500 dark:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
              <span>Other Technology Needs</span>
              <input
                type="checkbox"
                name="services"
                value="Other Technology Needs"
                checked={formData.services.includes("Other Technology Needs")}
                onChange={() => {
                  const newServices = formData.services.includes(
                    "Other Technology Needs"
                  )
                    ? formData.services.filter(
                        (service) => service !== "Other Technology Needs"
                      )
                    : [...formData.services, "Other Technology Needs"];
                  setFormData({ ...formData, services: newServices });
                }}
                className="form-checkbox"
              />
            </label>
          </div>
        </div>
        {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 dark:focus-within:border-blue-300 rounded-lg">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 dark:text-white leading-tight focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
            rows="4"
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-300"
        >
          Submit
        </button>

        {showConfirmation && (
          <div className="mt-6 p-4 bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200 rounded-md text-center">
            <p>Thank you for your inquiry. We will get back to you soon.</p>
            <button
              onClick={handleConfirmation}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              OK
            </button>
          </div>
        )}
      </form>

      {/* Brand Partners Section */}
      <Maps />
    </div>
  );
};

export default ContactForm;
