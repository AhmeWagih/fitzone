"use client";
import React from "react";
import Image from "next/image";
import SliderComponent from "./Slider";

const Testimonial = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-start py-8 text-white px-4 md:px-8 lg:px-16 mt-40 mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-8">What Our Member Say About Us?</h2>
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
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <SliderComponent />
            </div>
        </div>
    );
};

export default Testimonial;
