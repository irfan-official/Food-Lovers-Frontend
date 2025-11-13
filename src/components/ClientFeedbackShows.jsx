import React, { useEffect, useState, useContext } from "react";
import { Data_Context } from "../context/DataContext.jsx";
import ClientFeedbackCard from "./ClientFeedbackCard.jsx";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";

function ClientFeedbackShows() {
  const [isMobile, setIsMobile] = useState(false);
  const { usersFeedback } = useContext(Data_Context);

  useEffect(() => {
    Aos.init();

    // Detect window size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="flex w-full justify-center gap-20 flex-wrap mt-20 px-5"
      data-aos="fade-down"
    >
      <section className="text-center text-4xl md:text-5xl font-bold">
        Our Users Feedback
      </section>
      <Marquee
        pauseOnHover={false}
        gradient={!isMobile} // ✅ disables gradient on mobile
        gradientWidth={300}
        gradientColor={"rgb(255, 255, 255)"}
      >
        {usersFeedback.map(({ user_img, rating, feedback }, index) => (
          <ClientFeedbackCard
            key={index}
            user_img={user_img}
            rating={rating}
            feedback={feedback}
          />
        ))}
      </Marquee>
    </section>
  );
}

export default ClientFeedbackShows;
