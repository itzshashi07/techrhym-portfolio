// import React, { useMemo, useState, useEffect } from "react";
// import Select from "react-select";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaCode,
//   FaUsers,
//   FaLaptopCode,
//   FaTools,
// } from "react-icons/fa";
// import { getNames } from "country-list";
// import emailjs from "emailjs-com";
// import { useNavigate } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader"; // Import the loader

// const Enquireform = () => {
//   const [loading, setLoading] = useState(true); // State to manage loading
//   const options = useMemo(
//     () => getNames().map((name) => ({ label: name, value: name })),
//     []
//   );
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     country: "",
//     services: [],
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const navigate = useNavigate();

//   // Simulate a loading time (e.g., fetching data)
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Simulates a 2-second loading time
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSelectChange = (selectedOption, actionMeta) => {
//     if (actionMeta.name === "country") {
//       setFormData({
//         ...formData,
//         country: selectedOption ? selectedOption.value : "",
//       });
//     } else if (actionMeta.name === "services") {
//       setFormData({
//         ...formData,
//         services: selectedOption
//           ? selectedOption.map((option) => option.value)
//           : [],
//       });
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.fullName) formErrors.fullName = "Full Name is required";
//     if (!formData.email) formErrors.email = "Email Address is required";
//     if (!formData.phone) formErrors.phone = "Phone Number is required";
//     if (!formData.country) formErrors.country = "Country is required";
//     if (formData.services.length === 0)
//       formErrors.services = "At least one service must be selected";
//     if (!formData.message) formErrors.message = "Message is required";
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const emailData = {
//         full_name: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         country: formData.country,
//         services: formData.services.join(", "),
//         message: formData.message,
//       };

//       emailjs
//         .send(
//           "service_56hkzgp",
//           "template_0bkylai",
//           emailData,
//           "-Ffo8QsjcCGkhKbTc"
//         )
//         .then(() => {
//           setShowConfirmation(true);
//         })
//         .catch((error) => {
//           console.error("EmailJS Error:", error);
//         });
//     }
//   };

//   const handleConfirmation = () => {
//     setShowConfirmation(false);
//     navigate("/enquireform");
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <ClipLoader color={"#3182ce"} loading={loading} size={100} />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
//       <form
//         className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl w-full space-y-6"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
//           Business Enquiry
//         </h2>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaUser className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaEnvelope className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaPhone className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <Select
//             name="country"
//             options={options}
//             value={options.find((option) => option.value === formData.country)}
//             onChange={handleSelectChange}
//             className="w-full text-gray-800"
//             placeholder="Country"
//             styles={{
//               control: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//                 borderColor: state.isFocused ? "blue" : "gray",
//                 boxShadow: "none",
//                 "&:hover": {
//                   borderColor: "blue",
//                 },
//               }),
//               menu: (provided) => ({
//                 ...provided,
//                 backgroundColor: "white",
//               }),
//               menuList: (provided) => ({
//                 ...provided,
//                 padding: 0,
//               }),
//               option: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: state.isSelected
//                   ? "#3182ce"
//                   : state.isFocused
//                   ? "#63b3ed"
//                   : "white",
//                 color: state.isSelected ? "white" : "#2d3748",
//               }),
//               singleValue: (provided) => ({
//                 ...provided,
//                 color: "black",
//               }),
//               placeholder: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               dropdownIndicator: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               indicatorSeparator: (provided) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//               }),
//             }}
//           />
//         </div>
//         {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

//         <div className="space-y-2">
//           <label className="block text-gray-800 font-medium">
//             How Can We Help? *
//           </label>
//           <div className="flex flex-col space-y-2">
//             <label className="flex items-center space-x-2">
//               <FaCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Virtual Tour</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Software Development"
//                 checked={formData.services.includes("Software Development")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Software Development"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Software Development"
//                       )
//                     : [...formData.services, "Software Development"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaUsers className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Video Shooting</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Team Extension (Staff Augmentation)"
//                 checked={formData.services.includes(
//                   "Team Extension (Staff Augmentation)"
//                 )}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Team Extension (Staff Augmentation)"
//                   )
//                     ? formData.services.filter(
//                         (service) =>
//                           service !== "Team Extension (Staff Augmentation)"
//                       )
//                     : [...formData.services, "Team Extension (Staff Augmentation)"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaLaptopCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Photography</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Project-Based Engagement"
//                 checked={formData.services.includes("Project-Based Engagement")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Project-Based Engagement"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Project-Based Engagement"
//                       )
//                     : [...formData.services, "Project-Based Engagement"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaTools className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Image Retouching</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Maintenance & Support"
//                 checked={formData.services.includes("Maintenance & Support")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Maintenance & Support"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Maintenance & Support"
//                       )
//                     : [...formData.services, "Maintenance & Support"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//           </div>
//           {errors.services && (
//             <p className="text-red-500 text-sm">{errors.services}</p>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500 h-32"
//           />
//         </div>
//         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//         >
//           Submit
//         </button>
//       </form>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
//               Thank you!
//             </h3>
//             <p className="text-center text-gray-600">
//               Your enquiry has been submitted successfully. We will get back to you soon.
//             </p>
//             <button
//               onClick={handleConfirmation}
//               className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Enquireform;


// import React, { useState, useEffect, useContext,useMemo  } from "react";
// import { PopupContext } from "../../contexts/PopupContext";
// import Select from "react-select";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaCode,
//   FaUsers,
//   FaLaptopCode,
//   FaTools,
// } from "react-icons/fa";
// import { getNames } from "country-list";
// import emailjs from "emailjs-com";
// import { useNavigate } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader"; // Import the loader

// const Enquireform = () => {
//   const [loading, setLoading] = useState(true);
//   const { closePopup } = useContext(PopupContext); // Use the context to close popup
//   const options = useMemo(
//     () => getNames().map((name) => ({ label: name, value: name })),
//     []
//   );
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     country: "",
//     services: [],
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Simulates a 2-second loading time
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSelectChange = (selectedOption, actionMeta) => {
//     if (actionMeta.name === "country") {
//       setFormData({
//         ...formData,
//         country: selectedOption ? selectedOption.value : "",
//       });
//     } else if (actionMeta.name === "services") {
//       setFormData({
//         ...formData,
//         services: selectedOption
//           ? selectedOption.map((option) => option.value)
//           : [],
//       });
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.fullName) formErrors.fullName = "Full Name is required";
//     if (!formData.email) formErrors.email = "Email Address is required";
//     if (!formData.phone) formErrors.phone = "Phone Number is required";
//     if (!formData.country) formErrors.country = "Country is required";
//     if (formData.services.length === 0)
//       formErrors.services = "At least one service must be selected";
//     if (!formData.message) formErrors.message = "Message is required";
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const emailData = {
//         full_name: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         country: formData.country,
//         services: formData.services.join(", "),
//         message: formData.message,
//       };

//       emailjs
//         .send(
//           "service_56hkzgp",
//           "template_0bkylai",
//           emailData,
//           "-Ffo8QsjcCGkhKbTc"
//         )
//         .then(() => {
//           setShowConfirmation(true);
//           closePopup(); // Close the popup on form submission
//         })
//         .catch((error) => {
//           console.error("EmailJS Error:", error);
//         });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <ClipLoader color={"#3182ce"} loading={loading} size={100} />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
//       <form
//         className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl w-full space-y-6"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
//           Business Enquiry
//         </h2>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaUser className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaEnvelope className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaPhone className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <Select
//             name="country"
//             options={options}
//             value={options.find((option) => option.value === formData.country)}
//             onChange={handleSelectChange}
//             className="w-full text-gray-800"
//             placeholder="Country"
//             styles={{
//               control: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//                 borderColor: state.isFocused ? "blue" : "gray",
//                 boxShadow: "none",
//                 "&:hover": {
//                   borderColor: "blue",
//                 },
//               }),
//               menu: (provided) => ({
//                 ...provided,
//                 backgroundColor: "white",
//               }),
//               menuList: (provided) => ({
//                 ...provided,
//                 padding: 0,
//               }),
//               option: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: state.isSelected
//                   ? "#3182ce"
//                   : state.isFocused
//                   ? "#63b3ed"
//                   : "white",
//                 color: state.isSelected ? "white" : "#2d3748",
//               }),
//               singleValue: (provided) => ({
//                 ...provided,
//                 color: "black",
//               }),
//               placeholder: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               dropdownIndicator: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               indicatorSeparator: (provided) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//               }),
//             }}
//           />
//         </div>
//         {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

//         <div className="space-y-2">
//           <label className="block text-gray-800 font-medium">
//             How Can We Help? *
//           </label>
//           <div className="flex flex-col space-y-2">
//             <label className="flex items-center space-x-2">
//               <FaCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Virtual Tour</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Software Development"
//                 checked={formData.services.includes("Software Development")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Software Development"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Software Development"
//                       )
//                     : [...formData.services, "Software Development"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaUsers className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Video Shooting</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Team Extension (Staff Augmentation)"
//                 checked={formData.services.includes(
//                   "Team Extension (Staff Augmentation)"
//                 )}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Team Extension (Staff Augmentation)"
//                   )
//                     ? formData.services.filter(
//                         (service) =>
//                           service !== "Team Extension (Staff Augmentation)"
//                       )
//                     : [...formData.services, "Team Extension (Staff Augmentation)"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaLaptopCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Photography</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Project-Based Engagement"
//                 checked={formData.services.includes("Project-Based Engagement")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Project-Based Engagement"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Project-Based Engagement"
//                       )
//                     : [...formData.services, "Project-Based Engagement"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaTools className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Image Retouching</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Maintenance & Support"
//                 checked={formData.services.includes("Maintenance & Support")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Maintenance & Support"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Maintenance & Support"
//                       )
//                     : [...formData.services, "Maintenance & Support"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//           </div>
//           {errors.services && (
//             <p className="text-red-500 text-sm">{errors.services}</p>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500 h-32"
//           />
//         </div>
//         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//         >
//           Submit
//         </button>
//       </form>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
//               Thank you!
//             </h3>
//             <p className="text-center text-gray-600">
//               Your enquiry has been submitted successfully. We will get back to you soon.
//             </p>
//             <button
//               onClick={handleConfirmation}
//               className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Enquireform;


// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { PopupContext } from "../../contexts/PopupContext";
// import Select from "react-select";
// import { FaUser, FaEnvelope, FaPhone, FaCode, FaUsers, FaLaptopCode, FaTools } from "react-icons/fa";
// import { getNames } from "country-list";
// import emailjs from "emailjs-com";
// import ClipLoader from "react-spinners/ClipLoader";

// const Enquireform = () => {
//   const [loading, setLoading] = useState(true);
//   const { closePopup } = useContext(PopupContext); // Use the context to close popup
//   const options = useMemo(() => getNames().map(name => ({ label: name, value: name })), []);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     country: "",
//     services: [],
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 2000); // Simulates a 2-second loading time
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (selectedOption, actionMeta) => {
//     if (actionMeta.name === "country") {
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         country: selectedOption ? selectedOption.value : "",
//       }));
//     } else if (actionMeta.name === "services") {
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         services: selectedOption ? selectedOption.map(option => option.value) : [],
//       }));
//     }
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!formData.fullName) formErrors.fullName = "Full Name is required";
//     if (!formData.email) formErrors.email = "Email Address is required";
//     if (!formData.phone) formErrors.phone = "Phone Number is required";
//     if (!formData.country) formErrors.country = "Country is required";
//     if (formData.services.length === 0) formErrors.services = "At least one service must be selected";
//     if (!formData.message) formErrors.message = "Message is required";
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const emailData = {
//         full_name: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         country: formData.country,
//         services: formData.services.join(", "),
//         message: formData.message,
//       };

//       emailjs.send(
//         "service_56hkzgp",
//         "template_0bkylai",
//         emailData,
//         "-Ffo8QsjcCGkhKbTc"
//       )
//       .then(() => {
//         setShowConfirmation(true);
//         setTimeout(() => {
//           closePopup(); // Close the popup after a short delay to allow user to see the confirmation
//         }, 2000); // Adjust the delay as needed
//       })
//       .catch(error => {
//         console.error("EmailJS Error:", error);
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <ClipLoader color={"#3182ce"} loading={loading} size={100} />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
//       <form
//         className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl w-full space-y-6"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
//           Business Enquiry
//         </h2>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaUser className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaEnvelope className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <FaPhone className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
//           />
//         </div>
//         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <Select
//             name="country"
//             options={options}
//             value={options.find((option) => option.value === formData.country)}
//             onChange={handleSelectChange}
//             className="w-full text-gray-800"
//             placeholder="Country"
//             styles={{
//               control: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//                 borderColor: state.isFocused ? "blue" : "gray",
//                 boxShadow: "none",
//                 "&:hover": {
//                   borderColor: "blue",
//                 },
//               }),
//               menu: (provided) => ({
//                 ...provided,
//                 backgroundColor: "white",
//               }),
//               menuList: (provided) => ({
//                 ...provided,
//                 padding: 0,
//               }),
//               option: (provided, state) => ({
//                 ...provided,
//                 backgroundColor: state.isSelected
//                   ? "#3182ce"
//                   : state.isFocused
//                   ? "#63b3ed"
//                   : "white",
//                 color: state.isSelected ? "white" : "#2d3748",
//               }),
//               singleValue: (provided) => ({
//                 ...provided,
//                 color: "black",
//               }),
//               placeholder: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               dropdownIndicator: (provided) => ({
//                 ...provided,
//                 color: "#4a5568",
//               }),
//               indicatorSeparator: (provided) => ({
//                 ...provided,
//                 backgroundColor: "transparent",
//               }),
//             }}
//           />
//         </div>
//         {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

//         <div className="space-y-2">
//           <label className="block text-gray-800 font-medium">
//             How Can We Help? *
//           </label>
//           <div className="flex flex-col space-y-2">
//             <label className="flex items-center space-x-2">
//               <FaCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Virtual Tour</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Software Development"
//                 checked={formData.services.includes("Software Development")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Software Development"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Software Development"
//                       )
//                     : [...formData.services, "Software Development"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaUsers className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Video Shooting</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Team Extension (Staff Augmentation)"
//                 checked={formData.services.includes(
//                   "Team Extension (Staff Augmentation)"
//                 )}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Team Extension (Staff Augmentation)"
//                   )
//                     ? formData.services.filter(
//                         (service) =>
//                           service !== "Team Extension (Staff Augmentation)"
//                       )
//                     : [...formData.services, "Team Extension (Staff Augmentation)"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaLaptopCode className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Photography</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Project-Based Engagement"
//                 checked={formData.services.includes("Project-Based Engagement")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Project-Based Engagement"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Project-Based Engagement"
//                       )
//                     : [...formData.services, "Project-Based Engagement"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <FaTools className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
//               <span>Image Retouching</span>
//               <input
//                 type="checkbox"
//                 name="services"
//                 value="Maintenance & Support"
//                 checked={formData.services.includes("Maintenance & Support")}
//                 onChange={() => {
//                   const newServices = formData.services.includes(
//                     "Maintenance & Support"
//                   )
//                     ? formData.services.filter(
//                         (service) => service !== "Maintenance & Support"
//                       )
//                     : [...formData.services, "Maintenance & Support"];
//                   setFormData({ ...formData, services: newServices });
//                 }}
//                 className="form-checkbox"
//               />
//             </label>
//           </div>
//           {errors.services && (
//             <p className="text-red-500 text-sm">{errors.services}</p>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleInputChange}
//             className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500 h-32"
//           />
//         </div>
//         {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        

//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//         >
//           Submit
//         </button>
//       </form>

//       {showConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
//               Thank you!
//             </h3>
//             <p className="text-center text-gray-600">
//               Your enquiry has been submitted successfully. We will get back to you soon.
//             </p>
//             <button
//               onClick={() => setShowConfirmation(false)}
//               className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Enquireform;




import React, { useState, useEffect, useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";

const Enquireform = () => {
  const [loading, setLoading] = useState(true);
  const { closePopup } = useContext(PopupContext); // Use the context to close popup
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulates a 2-second loading time
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email Address is required";
    if (!formData.phone) formErrors.phone = "Phone Number is required";
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
        message: formData.message,
      };

      emailjs.send(
        "service_56hkzgp",
        "template_0bkylai",
        emailData,
        "-Ffo8QsjcCGkhKbTc"
      )
      .then(() => {
        setShowConfirmation(true);
        setTimeout(() => {
          closePopup(); // Close the popup after a short delay to allow user to see the confirmation
        }, 2000); // Adjust the delay as needed
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color={"#3182ce"} loading={loading} size={100} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
      <form
        className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl w-full space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Business Enquiry
        </h2>

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
          <FaUser className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
          />
        </div>
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
          <FaEnvelope className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
          <FaPhone className="text-gray-500 mr-3 w-5 h-5 md:w-6 md:h-6" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-2 focus-within:border-blue-500 rounded-lg">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-800 leading-tight focus:outline-none placeholder-gray-500 h-32"
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Submit
        </button>
      </form>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-center text-2xl font-bold text-gray-800 mb-4">
              Thank you!
            </h3>
            <p className="text-center text-gray-600">
              Your enquiry has been submitted successfully. We will get back to you soon.
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enquireform;
