import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer.jsx";

export default function MainLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
