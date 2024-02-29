import React, { ReactPropTypes } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({
  children,
  linkTo,
  isSelected,
}: {
  children: React.ReactNode;
  linkTo: string;
  isSelected?: boolean;
}) => {
  return (
    <Link to={linkTo}>
      <li
        className={`px-8 py-4 hover:bg-white hover:text-black hover:cursor-pointer transition ease-in-out ${
          isSelected ? "bg-white text-black" : ""
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default MenuItem;
