const stacks = [
  {
    tag: "Reliable • Scalable",
    tagAccent: false,
    icon: "⚙️",
    title: "Mainstream Stack",
    description: "Built on trusted technologies for stability and long-term scalability.",
    items: [
      "React / Next.js",
      "Node.js / Express",
      "MySQL / MongoDB",
      "WordPress / Webflow",
      "Shopify",
    ],
  },
  {
    tag: "High-Demand • Rare",
    tagAccent: true,
    icon: "🚀",
    title: "Specialized Stack",
    description: "Cutting-edge technologies for performance-critical and future-ready systems.",
    items: [
      "Golang (Go)",
      "Rust",
      "WebAssembly (WASM)",
      "Three.js (3D Web Experiences)",
      "Real-time Systems (WebSockets)",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Technology
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            We don't just use trendy tech — we choose what works best for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {stacks.map((stack, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group hover:border-blue-500/40 ${
                stack.tagAccent ? "border-blue-500/30" : "border-slate-800"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{stack.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{stack.title}</h3>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    stack.tagAccent
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "bg-slate-700/50 text-gray-400 border border-slate-700"
                  }`}
                >
                  {stack.tag}
                </span>
              </div>

              <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">{stack.description}</p>

              <ul className="space-y-2.5">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
