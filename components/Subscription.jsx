import React from "react";

const Subscription = () => {
  return (
    <div className="bg-blue-500 text-white p-6 sm:p-8 lg:px-20 text-center rounded-lg max-w-6xl my-8 mx-auto">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
        Subscribe our fitness tips
      </h2>
      <p className="mb-4 text-center text-sm sm:text-base text-gray-200 lg:text-lg">
        Clearly communicate the benefits of subscribing, such as exclusive
        content and breaking news.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0">
        <input
          type="email"
          placeholder="Enter your email address"
          className="border p-3 w-full sm:flex-1 outline-none rounded-lg text-gray-700"
        />
        <button
          type="submit"
          className="p-3 bg-red-800 text-white rounded-lg mt-3 sm:mt-0 sm:ml-3 hover:bg-red-900"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscription;
