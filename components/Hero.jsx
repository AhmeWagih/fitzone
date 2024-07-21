import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-black text-white h-screen overflow-hidden w-full">
      <div className="absolute inset-0">
        <Image
          src="/home.jpg"
          alt="Fitness People"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="container w-full relative z-10 mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center h-full">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-[700px]">
            Your Ultimate Fitness Destination
          </h1>
          <p className="text-gray-400 mb-6 max-w-[700px]">
            Welcome to Fitzon Gym, where we prioritize your fitness journey and
            help you achieve your goals in a welcoming and supportive
            environment. Whether you're a beginner or a seasoned fitness
            enthusiast, Fitzon Gym offers a wide range of amenities and services
            tailored to your needs.
          </p>
          <div className="my-5">
            <div className="flex -space-x-2">
              <Image
                src="/avatar.png"
                alt="User 1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/avatar.png"
                alt="User 2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/avatar.png"
                alt="User 3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <span className="text-gray-400 block mt-2">
              10K+ Satisfied Customers
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              className="bg-red-600 text-white px-5 py-3 rounded-lg"
              href="#"
              passHref
            >
              Start Training
            </Link>
            <Link
              className="flex items-center text-white border border-white px-5 py-3 rounded-lg"
              href="#"
              passHref
            >
              <Play className="mr-2" />
              Watch Demo
            </Link>
          </div>
        </div>
        {/* <div className="flex-1 w-full flex justify-center md:justify-end">
          <Image
            src="/homee.png"
            alt="Fitness Guy and Woman Standing"
            width={500}
            height={700}
          />
        </div>  */}
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;
