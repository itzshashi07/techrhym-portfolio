import React from 'react';
import BrandPartners from '../components/Home/BrandPartners';
// import ServicesSection from '../components/Services/ServicesSection';
 import ServicesCarousel from './../components/Services/ServicesCarousel'; // Corrected naming
import Doubt from '../components/Services/Doubt';
// import Industries from '../components/Industries/Industries';
//import ServiceFeatures from '../components/Services/ServiceFeatures';
import LatestVR from '../components/Services/LatestVR';
import Industries from '../components/Industries/Industries';
// import Industries from './Industries';

const Services = () => (
  <div>
    <ServicesCarousel /> {/* Corrected to uppercase and self-closing */}
    <BrandPartners /> {/* Corrected to uppercase and self-closing */}
    {/* <ServicesSection />
    <ServiceFeatures/> */}
   <LatestVR/>
    {/* <Industries/> */}
    <Industries/>
    <Doubt/>
    {/* <Industries/> */}
  </div>
);

export default Services;
