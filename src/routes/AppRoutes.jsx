import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/uslugi/:slug" element={<ServiceDetail />} />
        <Route path="/kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}
