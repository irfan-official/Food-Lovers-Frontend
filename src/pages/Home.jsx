import React, { useContext, useEffect, useState, useMemo } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { Auth_Context } from "../context/AuthContext.jsx";
import { Data_Context } from "../context/DataContext.jsx";
import useAxios from "../hooks/useAxios.jsx";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";

import ClientFeedbackShows from "../components/ClientFeedbackShows.jsx";
import MeetOurTopReviewersShows from "../components/MeetOurTopReviewersShows.jsx";
import Footer from "../components/Footer.jsx";
import CoffeeTips from "../components/CoffeeTips.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import HeroShow from "./HeroShow.jsx";
import Nav from "../components/Nav.jsx";

import usersFeedBackData from "../seeds/usersFeedback.js";
import Marquee from "react-fast-marquee";

function Home() {
  let { user, loading } = useContext(Auth_Context);
  let { serviceData, loader } = useContext(Data_Context);

  const axiosInstance = useAxios();
  const axiosSecureInstance = useAxiosSecure();

  const location = useLocation();

  useEffect(() => {
    console.log("location ==> ", location);
    // axiosInstance
    //   .get("/api/v1/data")
    //   .then((res) => {
    //     console.log("Data ===>", res.data);
    //   })
    //   .catch((error) => {
    //     console.log("error ===>", error.message);
    //   });
  }, []);

  // useEffect(() => {
  //   if (!loading && user) {
  //     // secure request — will include token after it’s ready
  //     axiosSecureInstance
  //       .get("/api/v1/secure-data")
  //       .then((res) => console.log("Secure Data:", res.data))
  //       .catch((err) => console.error("Secure Error:", err.message));
  //   }
  // }, [user]);

  // useEffect(() => {
  //   if (!loading && user) {
  //     // secure request — will include token after it’s ready
  //     axiosSecureInstance
  //       .get("/api/v1/")
  //       .then((res) => console.log("Secure Data:", res.data))
  //       .catch((err) => console.error("Secure Error:", err.message));
  //   }
  // }, [user]);

  // useEffect(() => {
  //   if (!loading && user) {
  //     // secure request — will include token after it’s ready
  //     axiosSecureInstance
  //       .post("/api/v1/create/review", { ...user, email: user.email + "mao" })
  //       .then((res) =>
  //         console.log("response from /api/v1/create/review => ", res.data)
  //       )
  //       .catch((err) => console.error(err));
  //   }
  // }, [loading]);

  // useEffect(() => {
  //   if (!loading && user) {
  //     // secure request — will include token after it’s ready
  //     axiosSecureInstance
  //       .post("/api/v1/create/review", {
  //         name: user.name,
  //         email: user.email,
  //         foodName: "Biriyani",
  //         image: "http://mao mao",
  //         category: "Home",
  //         ratings: 5,
  //         restaurantName: "Doglapan",
  //         location: "Khulna",
  //         reviewText:
  //           "loreeijoijwijferj jrifjiewrjf rjfierjf e jriejifjerijfi erfjiero jwfrejfije rwirjeifjier ji ferjifjir efre fierwjifjreiwjfi eerjfirejifeir fejifjiro fejferjfierjifer jfrejifjirjeri fioerifojeirj frjiefirejfijerfrejfiroefierojiof",
  //       })
  //       .then((res) =>
  //         console.log("response from /api/v1/create/review => ", res.data)
  //       )
  //       .catch((err) => console.error(err));
  //   }
  // }, [loading]);

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white text-black text-3xl">
        <span className="loading loading-spinner loading-xl scale-200"></span>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="w-full bg-white min-h-screen text-black flex-col justify-center items-center backdrop-blur-lg">
        <Nav />

        {location.pathname !== "/" ? (
          <Outlet />
        ) : (
          <>
            <section className="_Hero_ w-full flex flex-col items-center justify-center px-10 mt-5">
              <div className="w-full relative rounded-2xl overflow-hidden shadow-lg">
                <section className="w-full h-[85vh] flex items-center justify-center bg-gray-100 [perspective:1000px] overflow-clip border ">
                  <section className="w-[150%] bg-black rounded-xl shadow-2xl [transform-style:preserve-3d] [transform:rotateX(3deg)_rotateY(23deg)_translateZ(100px)] transition-transform duration-700 -rotate-3 bg-center">
                    <HeroShow />
                  </section>
                </section>
                <section className="__overlay__ w-full h-full bg-black/65 md:[background:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.92)_2%,rgba(0,0,0,0.50)_50%,rgba(0,0,0,0.80)_100%)] backdrop-blur-[1px] absolute top-0 r-0 z-[10]">
                  <section className="w-full h-full flex items-center justify-center text-white/30 font-bold text-[10rem] lovers-quarrel-regular hero-text text-center">
                    Food is culture, food is connection.
                  </section>
                </section>
              </div>
            </section>

            <section
              id="services"
              className="__Our-Services__ mt-10 md:mt-20 flex flex-col justify-center items-center gap-5 "
            >
              <h2 className="font-bold text-4xl md:text-5xl text-center mt-10 md:mt-0">
                Trending Reviews
              </h2>
              {loader ? (
                <section className="w-full min-h-28 flex justify-center ">
                  <span className="loading loading-spinner loading-xl scale-200"></span>
                </section>
              ) : (
                <>
                  <section className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5 2xl:gap-10 md:gap-15 justify-center items-center content-center mb-10 mt-12">
                    {serviceData.length >= 1 &&
                      serviceData.map(
                        (
                          {
                            serviceId,
                            serviceName,
                            providerName,
                            providerEmail,
                            price,
                            rating,
                            slotsAvailable,
                            description,
                            image,
                            category,
                          },
                          index
                        ) => (
                          <ReviewCard
                            key={index}
                            serviceId={serviceId}
                            serviceName={serviceName}
                            providerName={providerName}
                            providerEmail={providerEmail}
                            price={price}
                            rating={rating}
                            slotsAvailable={slotsAvailable}
                            description={description}
                            image={image}
                            category={category}
                          />
                        )
                      )}
                  </section>
                  <NavLink
                    to="/view/all-reviews"
                    className="bg-violet-300 text-purple-950 font-semibold hover:bg-violet-400 hover:text-white mb-10 px-20 py-4 rounded-md shadow-md "
                  >
                    ALL Reviews
                  </NavLink>
                </>
              )}
            </section>

            <MeetOurTopReviewersShows />
            <ClientFeedbackShows />
            <CoffeeTips />
            <GetInTouch />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Home;
