import React from "react";

const services = [
    {
        title: "Tourism",
        description: `Tourism is one of the industries that has had a dramatic impact on the introduction of virtual reality.`,
        imageSrc: "https://images.unsplash.com/photo-1573497019517-299efcad2c4d?w=600&auto=format&fit=crop&q=60",
    },
    {
        title: "Hotel Industry",
        description: `The hotel industry is another area of business where virtual reality plays a major role.`,
        imageSrc: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&auto=format&fit=crop&q=60",
    },
    {
        title: "Education",
        description: `In the educational sector, the role of virtual reality cannot be ignored. Students find it easier to understand.`,
        imageSrc: "https://images.unsplash.com/photo-1596526131083-5f650a82a7a6?w=600&auto=format&fit=crop&q=60",
    },
    {
        title: "Real Estate",
        description: `Virtual reality tours are revolutionizing the real estate market by allowing potential buyers to explore properties remotely.`,
        imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60",
    },
     {
        title: "Healthcare",
        description: `In healthcare, virtual tours are used to familiarize patients with facilities and procedures, reducing anxiety and improving patient experience.`,
        imageSrc: "https://images.unsplash.com/photo-1559523161-60e67ff9d2f9?w=600&auto=format&fit=crop&q=60",
    },
    
    
];

const ServicesSection = () => (
    <div className="bg-gray-100 dark:bg-gray-900 p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Explore Our Virtual Tour Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                    <img
                        src={service.imageSrc}
                        alt={service.title}
                        className="w-24 h-24 mx-auto mb-4 rounded-md object-cover"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {service.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
);

export default ServicesSection;
