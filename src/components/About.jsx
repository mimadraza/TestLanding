const metrics = [
  { icon: "🚀", label: "Fast Turnaround" },
  { icon: "📈", label: "Growth-Focused Systems" },
  { icon: "🤝", label: "Long-Term Support" },
  { icon: "💡", label: "Business-Driven Solutions" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left — Header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AmicoTechs
              </span>
            </h2>
            <p className="text-white text-xl font-semibold mb-4">
              We build technology that solves real problems.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              At AmicoTechs, we focus on delivering practical, scalable, and high-impact solutions. Our approach combines technical expertise with business understanding to help you operate smarter and grow faster.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90"
            >
              Work with us →
            </a>
          </div>

          {/* Right — Metrics */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex items-center gap-4 hover:border-blue-500/40 transition-colors duration-300 group"
                >
                  <span className="text-3xl">{metric.icon}</span>
                  <h3 className="text-white font-semibold text-base sm:text-lg">{metric.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
