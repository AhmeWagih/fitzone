// components/FitnessPlan.js
import Image from "next/image";
import Link from "next/link";

const FitnessPlan = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-20 text-white">
      <div className="grid grid-cols-1 p-4 md:w-1/2">
        <div className="w-full h-64 md:h-1/3">
          <Image
            src="/fit.png"
            alt="Fitness Image 1"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="p-8 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Transform your physique with our fitness plan.
        </h1>
        <ul className="text-lg mb-6">
          <li className="mb-2">✅ Increase Muscle and Strength</li>
          <li className="mb-2">✅ Be Healthier than before</li>
          <li className="mb-2">✅ Increase Stamina</li>
        </ul>
        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            className="bg-red-600 text-white px-4 py-2 rounded"
            href="/join"
          >
            Join now
          </Link>
          <Link
            className="border border-white px-4 py-2 rounded"
            href="/contact"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan;
