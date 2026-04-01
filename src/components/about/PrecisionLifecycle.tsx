import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Conceptual Design & CAD Modeling",
    description:
      "We begin with precise digital blueprints, transforming ideas into 3D models ready for rigorous analysis and flawless execution.",
  },
  {
    title: "Precision Prototyping",
    description:
      "Advanced rapid prototyping brings concepts to life, allowing for tactile evaluation, rapid iteration, and functional testing.",
  },
  {
    title: "Manufacturing & Quality Assurance",
    description:
      "Scaled production meets strict quality controls to ensure every final product consistently exceeds industry standards.",
  },
];

export default function PrecisionLifecycle() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 🔥 Auto highlight every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="mx-auto w-[min(1400px,calc(100%-40px))] px-4 md:px-8">
        
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-[clamp(32px,4vw,48px)] font-bold leading-tight">
            Precision Lifecycle
          </h2>
          <p className="mx-auto max-w-2xl text-lg">
            Experience our seamless methodology from ambitious initial concept to high-volume manufacturing.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:flex-row lg:gap-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={idx}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`flex-1 rounded-2xl border p-8 transition-all duration-700 ease-in-out cursor-default
                  ${
                    isActive
                      ?"scale-[1.02] md:scale-105 border-gray-200 bg-white shadow-lg md:-translate-y-2"
                      : "scale-100 border-gray-200 bg-gray-50 opacity-70 md:hover:opacity-100 md:hover:scale-[1.02]"
                  }`}
              >
                {/* Step Number */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold transition-colors duration-700
                  ${
                    isActive
                      ? "bg-[#0E142E] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Title */}
                <h3
                  className={`mb-4 text-2xl font-semibold transition-colors duration-700
                  ${isActive ? "text-gray-900" : "text-gray-500"}`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed transition-colors duration-700
                  ${isActive ? "text-gray-700" : "text-gray-400"}`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}