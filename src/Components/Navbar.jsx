import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center items-center bg-[#0F192C] py-5 shadow-sm shadow-[#F0F8FF]">
        {/* For Home */}
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        {/* For Notes */}
        <NavLink to="/notes">
          <li>Notes</li>
        </NavLink>

        {/* For Questions */}
        <NavLink to="/questions">
          <li>Questions</li>
        </NavLink>

        {/* For Classes */}
        <NavLink to="/classes">
          <li>Class</li>
        </NavLink>
      </nav>
    </div>
  );
};
