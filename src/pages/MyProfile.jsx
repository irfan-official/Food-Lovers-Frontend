import React, { useState, useEffect, useRef, useContext } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { FaRegEdit } from "react-icons/fa";
import { Auth_Context } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

function MyProfile() {
  let [editForm, setEditForm] = useState(false);
  let { user, logOut, update } = useContext(Auth_Context);

  const navigate = useNavigate();

  let [updateFormField, setUpdateFormFiels] = useState(false);

  let [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    image: user.image,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (updateFormField) {
      const check = await update(profileData);

      if (check.success) {
        setEditForm(false);
        setUpdateFormFiels(false);
      }
    }
  }

  function handleFormInput(e) {
    setUpdateFormFiels(true);
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const textareaRef = useRef(null);

  // Auto resize whenever value changes
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = textarea.scrollHeight + "px"; // set to scroll height
    }
  }, [profileData.image]);

  function handleInput(e) {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  return (
    <>
      <ScrollToTop />

      <div className="w-full min-h-screen ">
        <section className="w-full  bg-slate-900  text-white font-bold">
          <Nav />
        </section>
        <div className="w-full min-h-[50vh] p-5 flex flex-col gap-5 items-center justify-center ">
          <form
            onSubmit={handleSubmit}
            className="w-[22rem] md:w-[35rem] border mt-10 md:mt-20  flex flex-col items-center gap-2 p-4 md:p-5 py-10 rounded shadow"
          >
            <span className="__image__ w-24 h-24 border-3 rounded-full overflow-hidden bg-center object-center">
              <img
                className="w-full h-full bg-center object-center"
                src={`${user.image}`}
                alt=""
              />
            </span>
            <section className="w-full  grid grid-cols-1 gap-5">
              <span className="__email__ w-full justify-center flex items-center gap-3 md:gap-5  mt-3 md:mt-5">
                <span className="text-center w-[24%] md:w-[15%] ">Email:</span>
                <input
                  onChange={handleFormInput}
                  value={profileData.email}
                  disabled={true}
                  name="email"
                  placeholder="email"
                  className={`border border-black w-[70%] px-3 py-1 rounded-sm ${
                    false ? "border-lime-600" : "border-black "
                  }`}
                  type="email"
                />
              </span>
              <span className="__name__ w-full  justify-center flex items-center gap-3 md:gap-5">
                <span className="text-center w-[24%] md:w-[15%] ">Name:</span>
                <input
                  onChange={handleFormInput}
                  value={profileData.name}
                  disabled={!editForm}
                  name="name"
                  placeholder="name"
                  className={`border w-[70%] border-black  px-3 py-1 rounded-sm ${
                    editForm
                      ? " bg-gray-200 border-blue-600/60"
                      : "border-black"
                  }`}
                  type="text"
                />
              </span>

              <span className="__img-URL__ w-full  justify-center flex items-center gap-3 md:gap-5">
                <span className="  h-full  text-start text-nowrap">
                  Image URL:
                </span>
                <textarea
                  onChange={handleFormInput}
                  ref={textareaRef}
                  onInput={handleInput}
                  value={profileData.image}
                  disabled={!editForm}
                  name="image"
                  placeholder="imageURL"
                  className={`border w-[70%]  border-black resize-none px-3 py-1 rounded-sm ${
                    editForm ? "border-blue-600/60 bg-gray-200" : "border-black"
                  }`}
                ></textarea>
              </span>
              
            </section>
            <section className="mt-10">
              {editForm ? (
                <section className="__update__ flex items-center justify-center gap-5 font-semibold">
                  <button
                    onClick={() => {
                      setEditForm(true);
                    }}
                    type={"submit"}
                    className="px-5 py-3 bg-slate-950 text-white rounded-md shadow-md cursor-pointer"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setEditForm(false);
                    }}
                    type={"button"}
                    className="px-5 py-3 bg-red-600 text-white rounded-md shadow-md cursor-pointer"
                  >
                    Cancel
                  </button>
                </section>
              ) : (
                <button
                  onClick={() => {
                    setEditForm(true);
                  }}
                  type={"button"}
                  className="px-5 py-3 bg-lime-500 font-semibold text-white rounded-md shadow-md cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-lime-900">
                    <span className="text-lg">Edit</span>
                    <span className="text-lg">
                      <FaRegEdit />
                    </span>
                  </span>
                </button>
              )}
            </section>
          </form>

          <section className="__forgot-password__ ">
            <button
              onClick={() => {
                navigate("/reset-password");
              }}
              className="__logout-button__ w-[22rem] md:w-[35rem]  px-5 py-3 bg-blue-500 hover:bg-blue-800 text-white  rounded-md shadow-md cursor-pointer"
            >
              Forgot password
            </button>
          </section>

          <section className="__logout__ ">
            <button
              onClick={async () => {
                try {
                  let result = await logOut();
                  if (result.success) {
                    setTimeout(() => navigate("/"), 10);
                  }
                } catch (error) {
                  alert("error => ", error.message);
                }
              }}
              className="__logout-button__ w-[22rem] md:w-[35rem] mb-20 px-5 py-3 bg-slate-800 text-white hover:text-orange-400 rounded-md shadow-md cursor-pointer"
            >
              Logout
            </button>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyProfile;
