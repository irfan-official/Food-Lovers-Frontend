import React from "react";
import doubleQuto from "../assets/double-quotes.png";

function CoffeeTips() {
  return (
    <div className="__top__ w-full px-5 my-20 mt-40 flex flex-col justify-center  gap-17 pb-10">
      <section className="__Heading-Tips__ font-bold text-4xl md:text-5xl text-center">
        Coffee Tips
      </section>
      <section className="__bottom__ flex flex-col md:flex-row gap-20 items-center justify-center">
        <section className="__Img__ w-[22rem] md:w-[30rem]  __left__ rounded-xl shadow overflow-hidden bg-center">
          <img
            src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1028"
            alt=""
            className="object-center object-cover"
          />
        </section>
        <section className="__right__ w-[90%] md:w-[40%] flex flex-col gap-4 justify-center items-center">
          <section className="__inner_text__ flex flex-col gap-6">
            <h2 className="__heading__ font-bold text-xl select-none">Tips:</h2>
            <section className="__text__ relative">
              <span className="absolute select-none -top-5 -left-10 md:-top-5 md:-left-12">
                <img src={doubleQuto} alt="" className="rotate-180 w-10" />
              </span>
              <p className="flex text-justify ">
                Brewing the perfect cup of coffee during winter is all about
                warmth, flavor, and comfort. As temperatures drop, start by
                storing your beans in an airtight container away from moisture
                and cold air. Use freshly ground coffee for richer aroma and
                taste. Preheat your mug to keep your drink warmer longer, and
                use filtered water for a cleaner brew. Experiment with cozy
                blends like dark roasts or spiced infusions for extra depth.
                Froth milk or cream for a velvety texture, and add cinnamon or
                nutmeg for seasonal flair. Avoid boiling water directly over
                grounds—it can scorch and turn coffee bitter. Clean your coffee
                maker regularly to remove oils that dull flavor. Pair your drink
                with pastries or chocolate for a comforting treat. For an energy
                boost, try cold brew even in winter—it’s smooth and low-acid.
                Take a quiet moment to sip slowly and savor the aroma.
                Thoughtful brewing ensures every cup keeps you warm, energized,
                and satisfied all season long.
              </p>
              <span className="absolute select-none -bottom-5 -right-10 md:-bottom-5 md:-right-12">
                <img src={doubleQuto} alt="" className="w-10" />
              </span>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default CoffeeTips;
