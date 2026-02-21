const steps = [
  {
    number: "01",
    title: "Understanding Requirements",
    description: "We analyze your business needs, goals, and constraints — then define exactly the right solution for your context.",
  },
  {
    number: "02",
    title: "Onboarding & Scope",
    description: "Transparent scope of work with clear costs upfront. No surprises, no scope creep.",
  },
  {
    number: "03",
    title: "Mapping & Design",
    description: "Wireframes, UI/UX prototypes, and milestone planning so you see exactly what's being built before a line of code is written.",
  },
  {
    number: "04",
    title: "Development",
    description: "Full-scale product development with regular check-ins. You're never left wondering what's happening.",
  },
  {
    number: "05",
    title: "Deployment & Testing",
    description: "Launch and real-world validation with you. We stay through go-live to ensure everything works as expected.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-slate-900/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              How We
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            Clear, collaborative, and built around your timelines.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-0">
            {steps.map((step, key) => {
              const isEven = key % 2 === 0;
              return (
                <div
                  key={key}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div className={`flex-1 flex ${isEven ? "lg:justify-end lg:pr-12" : "lg:justify-start lg:pl-12"}`}>
                    <div className="w-full lg:max-w-sm bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Step number bubble (center on desktop) */}
                  <div className="flex-shrink-0 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/30 order-first lg:order-none">
                    <span className="text-white font-bold text-sm sm:text-base font-mono">{step.number}</span>
                  </div>

                  {/* Empty placeholder for alternate side */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90"
          >
            Let's start →
          </a>
        </div>
      </div>
    </section>
  );
}
