import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components";
import UserLayout from "../layout/user/UserLayout";
import {
  About,
  AdminLogin,
  Blog,
  Career,
  Contact,
  Dashboard,
  ForgotPassword,
  Home,
  Job,
  Login,
  ServicePage,
  Team,
  VerifyOTP,
} from "../pages";
import PricingPage from "@/pages/pricing/PricingPage";
import AdminLayout from "@/layout/admin/AdminLayout";
import Account from "@/pages/Admin/account/Account";
import { Clients } from "@/pages/Admin";
import AppliedJobs from "@/pages/Admin/applied-jobs/AppliedJobs";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Define specific routes first */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<ServicePage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/verify-otp" element={<VerifyOTP />} />

        
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/job" element={<Job />} />
          <Route path="/admin/account" element={<Account />} />
          <Route path="/admin/team" element={<Team/>} />
          <Route path="/admin/clients" element={<Clients/>} />
          <Route path="/admin/applied-jobs" element={<AppliedJobs/>} />
        </Route>

        {/* Fallback route for 404 - Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
