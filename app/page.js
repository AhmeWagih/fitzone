import FitnessPlan from "@/components/FitnessPlan";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Pricing from "@/components/Pricing";
import Program from "@/components/Program";
import Subscription from "@/components/Subscription";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Program />
      <FitnessPlan />
      <JoinUs />
      <Pricing />
      <Testimonial />
      <Subscription />
    </main>
  );
}
