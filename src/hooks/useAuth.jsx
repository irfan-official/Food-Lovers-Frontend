import React, { useContext } from "react";
import { Auth_Context } from "../context/AuthContext.jsx";

function useAuth() {
  const authInfo = useContext(Auth_Context);
  return authInfo;
}

export default useAuth;
