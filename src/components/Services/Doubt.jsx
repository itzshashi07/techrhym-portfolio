import React from 'react';
import { Link } from 'react-router-dom';

const Doubt = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat p-8  rounded-lg shadow-md max-w-6xl mx-auto my-12 flex flex-col items-center"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        >
            <div className="bg-white/60 dark:bg-gray-900/80 p-6 rounded-lg max-w-lg text-center">
                <h2 className="font-bold text-lg md:text-xl text-[#FFAF45] mb-4">
                    Still have questions?
                </h2>
                <p className="text-gray-900 dark:text-gray-300 text-sm md:text-base lg:text-lg font-light mb-4">
                    "Have more questions? Contact us and we'll do our best to provide the answers you need."
                </p>
                <Link to="/contact">
                    <button
                        className="bg-[#FFAF45] text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition ease-in-out duration-300"
                    >
                        Get in touch
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Doubt;
