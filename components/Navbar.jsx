import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 flex justify-between items-center py-4">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      </Link>
      <div className="hidden md:flex justify-between items-center gap-5">
        <Link className="hover:text-blue-600" href={"/"} passHref>
          Home
        </Link>
        <Link className="hover:text-blue-600" href={"/program"} passHref>
          Program
        </Link>
        <Link className="hover:text-blue-600" href={"/pricing"} passHref>
          Pricing
        </Link>
        <Link className="hover:text-blue-600" href={"/community"} passHref>
          Community
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center gap-5">
        <button className="text-white px-5 py-2 rounded-xl border-2 border-slate-100 hover:bg-slate-100 hover:text-black">
          Login
        </button>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
