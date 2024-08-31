import React from 'react'
import HeroSection from './../components/Home/HeroSection';
import Brandpartners from '../components/Home/BrandPartners';
import OnDemand from '../components/Home/OnDemand';
import Features from '../components/Home/Features';
// import Clients from '../components/Home/Clients';
// import IndustriesServe from '../components/Home/IndustriesServe';
import Faq from '../components/Home/Faq';
import DiscussProject from '../components/Home/DiscussProject';
// import StartTour from '../components/Home/StartTour';
import LatestVR from '../components/Services/LatestVR';
import WhyChoose from '../components/Industries/WhyChoose';
import Vision from '../components/About/Vision';
import Abouts from '../components/About/Abouts';
import HowItWorks from '../components/About/HowItWorks';
// import Enquireform from '../components/Contact/Enquireform';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      {/* <Brandpartners/> */}
      {/* <OnDemand/> */}
      {/* <StartTour/> */}
      {/* <Features/> */}
      {/* <TechStack/> */}
      <LatestVR/>
      {/* <Clients/> */}
      {/* <IndustriesServe/> */}
      <WhyChoose/>
      <Abouts/>
      <Vision/>
      <HowItWorks/>
      <Faq/>
      <DiscussProject/>
    {/* <Enquireform/> */}
    </div>
  )
}

export default Home
