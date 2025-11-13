import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { NavLink, useNavigate } from "react-router";
import { Auth_Context } from "../context/AuthContext.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { toast, Bounce } from "react-toastify";
import { LuMail } from "react-icons/lu";

function ForgotPassword() {
  const navigate = useNavigate();

  const { user, forgotEmail, resetPassword } = useContext(Auth_Context);

  const [changePassEmail, setChangePassEmail] = useState(
    forgotEmail || user?.email
  );

  const [emailPassResetMessage, setEmailPassResetMessage] = useState("");

  useEffect(() => {
    setChangePassEmail(forgotEmail || user?.email);
  }, [forgotEmail, user?.email]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!changePassEmail) {
      return;
    }

    const message = await resetPassword(changePassEmail);
    if (message) {
      setEmailPassResetMessage("Please check your Email Inbox and Spam Box");
    }
  }
  return (
    <>
      <ScrollToTop />

      <div className="w-full min-h-screen ">
        <section className="w-full  bg-slate-900  text-white font-bold ">
          <Nav />
        </section>
        <div className="w-full h-[80vh] p-5 flex flex-col gap-5 items-center justify-center ">
          <form
            onSubmit={handleSubmit}
            className="w-[20rem] md:w-[35rem] border my-20 md:my-30  flex flex-col items-center gap-2 p-5 pt-10  rounded shadow "
          >
            <section className="__container__ w-full md:w-[80%] flex flex-col gap-2">
              <section className="__email__ flex flex-col gap-5 items-center justify-center ">
                <h2 className=" w-full text-center flex items-center justify-center gap-2 ">
                  <span className="text-2xl text-orange-700">
                    <LuMail />
                  </span>
                  <h2 className="font-semibold text-[1.2rem]">
                    Enter Your Email
                  </h2>
                </h2>
                <input
                  onChange={(e) => {
                    setChangePassEmail(e.target.value);
                  }}
                  required
                  type="email"
                  name="email"
                  value={changePassEmail}
                  className="w-full px-3 py-3 border border-slate-600/50 shadow rounded-sm outline-0"
                  placeholder="email"
                />
              </section>
              <section className="__button__ w-full flex items-center justify-center ">
                <button className="w-full px-5 py-2 rounded-lg bg-red-700 text-white border-1 cursor-pointer hover:bg-red-800 shadow-md">
                  Reset Password
                </button>
              </section>
            </section>

            <section className="text-center text-red-500 text-[0.7rem] md:text-[0.9rem]">
              {emailPassResetMessage}
            </section>

            <button
              onClick={() => navigate(-1)}
              type="button"
              className="__Back-button__ w-full text-center pt-0  underline text-blue-500 hover:text-blue-700 text-[0.7rem] md:text-[0.9rem] mt-4 cursor-pointer"
            >
              Suddenly remmember your password and go Back
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ForgotPassword;
