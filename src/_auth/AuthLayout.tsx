import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex bg-slate-900 w-full h-auto min-h-dvh">
      <div className="flex flex-1 justify-center items-center p-8">
        <Outlet />
      </div>

      <img
        src="/assets/authImg.jpg"
        alt=""
        className="lg:block hidden w-1/2 object-cover h-dvh "
      />
    </div>
  );
};

export default AuthLayout;
