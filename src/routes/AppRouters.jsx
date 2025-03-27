import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../components/Footer.jsx";
// import ErrorBoundary from "./ErrorBoundary";

// Lazy load all page components
const Home = lazy(() => import("../pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
// const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/NotFound"));

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouters;
