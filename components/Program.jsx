"use client";
import { programs } from "@/constants";
import React from "react";

const Program = () => {
  return (
    <div className="container mx-auto flex flex-col items-start py-8 text-white px-4 md:px-8 lg:px-16 mt-40 mb-16">
      <h2 className="text-4xl font-extrabold mb-8">
        Explore Our Program
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-950 px-10 py-6 rounded-lg min-w-[300px] text-start transition-colors duration-300"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl mb-2">{program.title}</h3>
            <p className="text-base text-gray-400">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
