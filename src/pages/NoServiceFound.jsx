import React from "react";
import AppNotFound from "../assets/App-Error.png";
import { NavLink } from "react-router";
function NoServiceFound() {
  return (
    <div className="w-full h-[90vh]  flex flex-col items-center justify-center gap-10 px-10">
      <section className="c">
        <img src={AppNotFound} alt="" />
      </section>
      <section className="flex flex-col gap-6">
        <h1 className="text-center text-4xl font-bold text-black">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[1.2rem] text-gray-600/50 text-center font-semibold">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <section className="flex items-center justify-center">
          <NavLink
            className="px-7 py-3 text-center font-semibold text-white rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-lg"
            to="/"
          >
            Go Back
          </NavLink>
        </section>
      </section>
    </div>
  );
}

export default NoServiceFound;
