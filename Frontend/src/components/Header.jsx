// Header.js

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
      <h1 className="text-5xl font-extrabold text-center mb-4">
        📸 Photo Album
      </h1>
      <p className="text-center text-lg mb-6">
        Your memories preserved forever. Upload and share your favorite moments.
      </p>
      <div className="text-center">
        {location.pathname !== "/upload" && (
          <Link to="/upload">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
              Upload Photo
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
