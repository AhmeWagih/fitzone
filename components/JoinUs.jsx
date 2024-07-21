import React from "react";

const JoinUs = () => {
  return (
    <div className="bg-black text-white py-10 px-5 sm:px-10 md:px-20 my-10 rounded mx-5 sm:mx-10 md:mx-20 w-full md:w-2/3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-lg font-bold capitalize max-w-lg text-center md:text-left">
          Enhance user experience with healthy nutrition tips, support
          resources, and social elements.
        </p>
        <button className="bg-red-600 text-white px-5 py-2.5 rounded-xl hover:bg-red-700 mt-4 md:mt-0">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
