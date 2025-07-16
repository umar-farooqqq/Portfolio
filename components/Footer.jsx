import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    // <div className="bg-white">
    //   {/* <div className="text-center pt-20">
    //     <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
    //   </div> */}
      



    // </div>

    <footer className="w-full py-4 text-center bg-gray-300 text-gray-600 mt-auto ">
        © {new Date().getFullYear()} Umar's Portfolio. All rights reserved.
      </footer>
  );
};

export default Footer;
