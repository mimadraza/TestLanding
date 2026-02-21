const services = [
  {
    icon: "🧩",
    title: "Web Development",
    description:
      "From clean landing pages to fully tailored experiences — we build websites that convert, perform, and scale. Whether you need a basic online presence or a custom 3D-powered brand site, we deliver it right.",
    tiers: [
      { name: "Basic Package", price: "Starting $200", detail: "Clean, conversion-focused design. WordPress / Webflow." },
      { name: "E-Commerce", price: "Starting $450", detail: "Built for high traffic & conversions. Industry-focused design. Free competitor analysis." },
      { name: "Custom Websites", price: "Starting $1,500", detail: "Fully tailored design. 3D visuals & advanced UI. Custom admin panel. SEO-optimized content." },
    ],
    imagePosition: "left",
  },
  {
    icon: "⚙️",
    title: "Web App Development",
    description:
      "We digitize your workflows, optimize communications, and build the operational systems your business actually needs — from record management to real-time data analytics.",
    tiers: [
      { name: "Operational Package", price: "Starting $600", detail: "Workflow digitization, communication optimization, record management, data analytics." },
      { name: "Custom Solutions", price: "Starting $850", detail: "Built around your exact business needs and operational challenges." },
    ],
    imagePosition: "right",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "End-to-end Android, iOS, and hybrid app development — built by experienced teams and fully deployed. From idea to app store, we own the entire pipeline.",
    tiers: [
      { name: "Android / iOS / Hybrid", price: "Starting $1,200", detail: "End-to-end development & deployment. Built by experienced teams." },
    ],
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Services
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
              From first website to full digital operations — built around how you work.
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {services.map((service, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Tiers Panel */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-blue-600/50 transition-all duration-300">
                    <div className="bg-gray-950 rounded-lg p-4 sm:p-5 space-y-4">
                      {/* IDE header */}
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-3 text-xs sm:text-sm font-mono">
                          {service.icon} {service.title}
                        </span>
                      </div>

                      {/* Tiers */}
                      <div className="space-y-3">
                        {service.tiers.map((tier) => (
                          <div
                            key={tier.name}
                            className="border border-slate-700/60 rounded-lg p-3 sm:p-4 hover:border-blue-500/40 transition-colors duration-200 bg-slate-900/40"
                          >
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-white font-semibold text-sm sm:text-base">{tier.name}</span>
                              <span className="text-blue-400 text-xs sm:text-sm font-mono whitespace-nowrap ml-2">{tier.price}</span>
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{tier.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center mt-6 gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                  >
                    Get a quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}