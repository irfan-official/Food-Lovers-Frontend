import React, { useState, useEffect, useMemo, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Data_Context } from "../context/DataContext.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MeetOurTopReviewersCard from "./MeetOurTopReviewersCard.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function MeetOurTopReviewersShows() {
  const { topReviewers } = useContext(Data_Context);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-4xl md:text-5xl text-center mt-30">
        Top Reviewers
      </h2>
      <div
        className=" w-full flex justify-center mt-20 mb-20 px-5"
        data-aos="fade-down"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          navigation={true} 
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {topReviewers ? (
            topReviewers.map(
              ({ name, createdAt, image, rating, statement }, index) => (
                <SwiperSlide key={index} className="">
                  <section className="flex items-center justify-center">
                    <MeetOurTopReviewersCard
                      name={name}
                      createdAt={createdAt}
                      image={image}
                      rating={rating}
                      statement={statement}
                    />
                  </section>
                </SwiperSlide>
              )
            )
          ) : (
            <span className="loading loading-spinner loading-xl"></span>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default MeetOurTopReviewersShows;
