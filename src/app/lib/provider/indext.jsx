import ContextProvider from "@/context/ContextProvider";
import React from "react";
import { ToastContainer } from "react-toastify";

const Provider = ({ children }) => {
  return <ContextProvider> <ToastContainer position="top-center"
autoClose={100}/>{children}</ContextProvider>;
};

export default Provider;
