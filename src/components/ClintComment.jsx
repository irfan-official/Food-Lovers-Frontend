import React from "react";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";

function ClintComment({ image, name, createdAt, comment }) {
  return (
    <div className="flex  justify-start gap-6 border-b w-full">
      <section className="__img__ __left__ w-[60px] lg:w-[53px] h-[52px] rounded-full overflow-hidden shadow border-2 border-slate-400 object-cover bg-cover">
        <img
          className="w-full h-full object-cover object-top"
          src={image}
          alt=""
        />
      </section>
      <section className="__details__ __right__ flex flex-col  w-full">
        <section className="__top__ gap-7 flex items-center justify-start mt-3 bg-white">
          <section className="__name__ font-semibold">{name}</section>
          <section className="__stars__ text-gray-500/80 flex items-center gap-1 text-[0.6rem]">
            {format(new Date(createdAt), "dd/MM/yy")}
          </section>
        </section>
        <section className="__bottom__ w-full py-3 pb-5">{comment}</section>
      </section>
    </div>
  );
}

export default ClintComment;
