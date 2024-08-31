import React from "react";
import { Link } from "react-router-dom";

const StartTour = ({ mode }) => {
  const isNightMode = mode === "night";
  const backgroundImage = "/images/starttourbg.jpg"; // Replace with your image path

  return (
    <div
      className={`flex flex-col items-start justify-center h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ml-8 md:ml-16">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-8 ${
            isNightMode ? "text-white" : "text-black"
          }`}
          style={{
            color: "#FFAF45",
            fontFamily: "Bodoni, serif",
          }}
        >
          Virtual Tour Made Simple
        </h1>
        <Link to="/ourtour">
        <button
          className={`px-6 py-3 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 ${
            isNightMode
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          style={{
            borderColor: "#FFAF45",
            borderWidth: "2px",
          }}
        >
          Let's Take a Tour
        </button>
        </Link>
      </div>
    </div>
  );
};

export default StartTour;
