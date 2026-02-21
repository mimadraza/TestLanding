const industries = [
  {
    icon: "🎓",
    title: "Education",
    description: "Pre-built systems for schools, colleges, and training institutes — customized to your operations.",
    features: [
      "Admission & Enrollment Portals",
      "Attendance Management Systems",
      "Learning & LMS Platforms",
      "Billing & Payments",
      "Parent & Staff Portals",
    ],
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description: "End-to-end digital infrastructure for clinics, hospitals, and healthcare networks.",
    features: [
      "Patient Registration & Appointments",
      "Electronic Medical Records",
      "Billing & Insurance Systems",
      "Inventory & Lab Management",
      "Online Consultations",
    ],
  },
  {
    icon: "🛒",
    title: "Retail",
    description: "Operational and e-commerce systems built to move inventory, close sales, and retain customers.",
    features: [
      "Inventory & Order Management",
      "POS & Billing Systems",
      "Customer Support Systems",
      "Sales Analytics & Forecasting",
    ],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      {/* subtle section bg */}
      <div className="absolute inset-0 bg-slate-900/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Industry
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            Pre-thought building blocks for your sector — customized to your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, key) => (
            <div
              key={key}
              className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group hover:border-blue-500/40 flex flex-col"
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl pointer-events-none" />

              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{industry.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">{industry.description}</p>

              <ul className="space-y-2.5 mt-auto">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
