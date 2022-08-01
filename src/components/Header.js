import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";
export default function Header() {
  return (
    <header className=" bg-white border-b border-gray-300 ">
      <div className=" h-[60] flex items-center justify-between container mx-auto">
        <Link to="/">
          <img
            className="h-[39px]"
            src="https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png"
          />
        </Link>
        <Search/>
        <nav>
            <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}
