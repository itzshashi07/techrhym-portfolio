import React from 'react';

const ServiceFeatures = () => {
  const services = [
    {
      title: "360° Interactive Panorama",
      description:
        "Experience the most immersive and realistic view of any scene. We create both sequences of panoramas and individual units tailored to your needs, delivering a truly captivating experience.",
      imageSrc: "/path/to/panorama-image.png",
    },
    {
      title: "The Scenario of Virtual Tour",
      description:
        "Take a journey through a series of panoramas that seamlessly guide you through a location. Our virtual tours bring any place to life, offering a vivid experience that feels as if you're actually there.",
      imageSrc: "/path/to/virtual-tour-image.png",
    },
    {
      title: "3D Product Photography",
      description:
        "Discover products like never before with our 3D photography. Rotate and explore every angle, as if you’re holding the item in your hand. This innovative approach showcases your product in its full glory.",
      imageSrc: "/path/to/3d-product-image.png",
    },
  ];

  return (
    <div className="flex flex-col space-y-16 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex items-center space-x-6 ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src={service.imageSrc}
            alt={service.title}
            className="w-1/2 rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{
              animation: `${
                index % 2 === 0 ? "slideInLeft" : "slideInRight"
              } 1s ease`,
            }}
          />
          <div
            className={`w-1/2 ${
              index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
            }`}
          >
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="mt-4 text-lg">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
