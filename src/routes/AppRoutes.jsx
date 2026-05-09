import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactPage from "../pages/ContactPage";
import SmartHomeKrakowPage from "../pages/SmartHomeKrakowPage";
import Realizacje from "../pages/Realizacje";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/smart-home-krakow" element={<SmartHomeKrakowPage />} />
        <Route path="/realizacje" element={<Realizacje />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
