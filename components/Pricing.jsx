import React from "react";
import { CircleCheck } from "lucide-react";
import { FaCheckCircle } from 'react-icons/fa'
const Pricing = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Pricing</h1>
      <h1 className="text-4xl font-bold mb-8">Our List Packages</h1>
      <div className="flex mb-10 bg-white rounded-xl">
        <button className="bg-black m-4 text-white px-4 py-2 rounded-lg">
          Billed Monthly
        </button>
        <button className=" text-black px-4 py-2 font-medium rounded-r">
          Billed Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="border border-red-400 bg-gray-950 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Package</h2>
          <p className="flex mt-6 text-[40px] leading-[38px] font-extrabold mb-4">
            <span className="self-start text-[14px] leading-[17px] font-semibold">
              $
            </span>
            25
            <span className="self-end text-[14px] leading-[17px] font-medium">
              /month
            </span>
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />Unlimited Gym Access
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              2x Fitness Consultant
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Nutrition Tracking
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              1x Free Suplement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              3 Days per week
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Personal Trainer
            </li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full my-4 ">
            Buy plan
          </button>
        </div>
        <div className="border border-red-400 bg-gray-950 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mid Package</h2>
          <p className="flex mt-6 text-[40px] leading-[38px] font-extrabold mb-4">
            <span className="self-start text-[14px] leading-[17px] font-semibold">
              $
            </span>
            55
            <span className="self-end text-[14px] leading-[17px] font-medium">
              /month
            </span>
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />Unlimited Gym Access
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              4x Fitness Consultant
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Nutrition Tracking
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              3x Free Suplement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              5 Days per week
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Personal Trainer
            </li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full my-4 ">
            Buy plan
          </button>
        </div>
        <div className="border border-red-400 bg-gray-950 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Pro Package</h2>
          <p className="flex mt-6 text-[40px] leading-[38px] font-extrabold mb-4">
            <span className="self-start text-[14px] leading-[17px] font-semibold">
              $
            </span>
            75
            <span className="self-end text-[14px] leading-[17px] font-medium">
              /month
            </span>
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />Unlimited Gym Access
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              7x Fitness Consultant
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Nutrition Tracking
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              5x Free Suplement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Gym Card
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Personal Trainer
            </li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full my-4 ">
            Buy plan
          </button>
        </div>
        <div className="border border-red-400 bg-gray-950 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Athlete Package</h2>
          <p className="flex mt-6 text-[40px] leading-[38px] font-extrabold mb-4">
            <span className="self-start text-[14px] leading-[17px] font-semibold">
              $
            </span>
            105
            <span className="self-end text-[14px] leading-[17px] font-medium">
              /month
            </span>
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />Unlimited Gym Access
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Free Clothes
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              All Training Program
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Free Suplement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Gym Card
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Free Fitness Consultant
            </li>
          </ul>
          <button className="bg-red-500 text-white px-4 py-2 rounded w-full my-4 ">
            Buy plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
