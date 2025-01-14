import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components";
import UserLayout from "../layout/user/UserLayout";
import { About, Home } from "../pages";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Define specific routes first */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>} /> 
          <Route path="/about-us" element={<About />} />
        </Route>

        {/* Fallback route for 404 - Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;