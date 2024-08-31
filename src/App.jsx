import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Social from "./components/common/Social";
import Enquiry from "./components/common/Enquiry";
import { PopupProvider } from "./contexts/PopupContext"; // Import the PopupProvider

// Lazy load the pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const StartTour = lazy(() => import("./components/Home/StartTour"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Enquireform = lazy(() => import("./components/Contact/Enquireform")); // Correct path

const Layout = () => {
  const location = useLocation();
  const isEnquireformPage = location.pathname === "/enquireform";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#151f20]">
      {!isEnquireformPage && <Social />}
      {!isEnquireformPage && <Enquiry />}
      <Routes>
        <Route
          path="/enquireform"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Enquireform />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    {/* <Route path="/ourtour" element={<Industries />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/starttour" element={<StartTour />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

const App = () => (
  <PopupProvider>
    <Router>
      <Layout />
    </Router>
  </PopupProvider>
);

export default App;
