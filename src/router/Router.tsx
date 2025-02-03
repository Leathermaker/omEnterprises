import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components";
import UserLayout from "../layout/user/UserLayout";
import { About, Blog, Career, Contact, Home, Login, ServicePage } from "../pages";
import PricingPage from "@/pages/pricing/PricingPage";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Define specific routes first */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>} /> 
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<ServicePage />} />
        </Route>

        {/* Fallback route for 404 - Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;