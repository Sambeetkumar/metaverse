import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Spinner from "./components/Spinner";
const About = React.lazy(() => import("./sections/About"));
const Explore = React.lazy(() => import("./sections/Explore"));
const GetStarted = React.lazy(() => import("./sections/GetStarted"));
const WhatsNew = React.lazy(() => import("./sections/WhatsNew"));
const World = React.lazy(() => import("./sections/World"));
const Insights = React.lazy(() => import("./sections/Insights"));
const Feedback = React.lazy(() => import("./sections/Feedback"));
const Footer = React.lazy(() => import("./sections/Footer"));
function App() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<Spinner />}>
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
