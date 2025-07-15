import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center bg-gray-100 text-gray-600 mt-auto">
      © {new Date().getFullYear()} Umar's Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
