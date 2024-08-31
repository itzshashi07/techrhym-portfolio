import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Maps = () => {
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    // Simulate view state change
    setViewDiv(true);
  }, []);

  const contactAnimation = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 50, opacity: 0 },
  };

  return (
    <motion.div
      className="mt-16"
      initial="hidden"
      animate={viewDiv ? 'visible' : 'hidden'}
      variants={contactAnimation}
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: '56.25%',
        position: 'relative',
      }}
    >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.56517318916!2d77.36034465!3d28.620150550000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725104018594!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default Maps;
