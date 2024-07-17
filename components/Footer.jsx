import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-16">
      <div className="flex justify-between items-start flex-wrap gap-10">
        <div className="md:col-span-1 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <Image src={"/logo.png"} alt="logo" width={150} height={50} />
          </div>
          <p className="text-gray-400">
            Highlight benefits of each exercise, both physical and mental
          </p>
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">Sitemap</h2>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/promos"}>Promos</Link>
            <Link href={"/news"}>News & Blog</Link>
            <Link href={"/help"}>Help Center</Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">Support</h2>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/support"}>Support Center</Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <Link href={"#"}>
                <Twitter />
              </Link>
              <Link href={"#"}>
                <Instagram />
              </Link>
              <Link href={"#"}>
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p>&copy; 2023 Fitness Center</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href={"/terms"}>Term of Use</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
