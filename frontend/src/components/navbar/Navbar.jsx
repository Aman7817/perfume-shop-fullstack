import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Perfume Shop</h1>

      <ul className="flex gap-6 text-gray-700">
        <li>
          <Link
            to="/"
            className="hover:text-black transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="hover:text-black transition"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
