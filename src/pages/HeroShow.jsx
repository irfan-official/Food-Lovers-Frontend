import React, { useContext, useState, useEffect } from "react";
import HeroImgCard from "../components/HeroImgCard.jsx";
import { Data_Context } from "../context/DataContext.jsx";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroShow() {
  const { foodie, loader } = useContext(Data_Context);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Aos.init();

    // Detect window size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loader) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-4xl font-bold">
        Loading...
      </div>
    );
  }

  let gradColor = "rgb(0, 0, 0)";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-10 gap-5 ">
      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="right"
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>

      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="left"
          speed={20}
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>

      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="right"
          speed={10}
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>

      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="left"
          speed={5}
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>

      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="right"
          speed={15}
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>

      <section className="flex w-full h-44 justify-center gap-20 flex-wrap  px-5">
        <Marquee
          direction="left"
          pauseOnHover={false}
          gradient={!isMobile} // ✅ disables gradient on mobile
          gradientWidth={300}
          gradientColor={gradColor}
        >
          {foodie.map(({ image }, index) => (
            <HeroImgCard key={index} index={index} image={image} />
          ))}
        </Marquee>
      </section>
    </div>
  );
}

export default HeroShow;
