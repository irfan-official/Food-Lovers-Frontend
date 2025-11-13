import React from "react";
import { Outlet } from "react-router";
import { useParams } from "react-router";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Reviews() {
  const { id } = useParams();

  if (id) {
    return (
      <>
        <ScrollToTop />
        <section className="w-full  bg-slate-900  text-white font-bold">
          <Nav />
        </section>
        <Outlet />
        <Footer />
      </>
    );
  }
  return <div className="w-full min-h-screen">Services</div>;
}

export default Reviews;
