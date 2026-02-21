import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Dither from './Dither';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Dither Background */}
      <div className="absolute inset-0 w-full h-full">
        <Dither
          waveColor={[0.1, 0.3, 0.6]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.1}
        />
      </div>

      {/* Mouse-follow radial overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.9), transparent 40%)`,
          zIndex: 1,
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative w-full" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Digital systems that actually ship
              </span>
            </div>

            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build. Launch.
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Scale.
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
                In 72 Hours.
              </span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Take your business online, streamline operations, and scale with powerful digital solutions — built fast, built right.
            </p>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
              {["No jargon", "No hidden costs", "Just results"].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
              <a
                href="#contact"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:opacity-90 flex items-center justify-center space-x-2"
              >
                <span>🚀 Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2"
              >
                <span>📞 Book a Consultation</span>
              </a>
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div className="relative order-2 w-full flex flex-col gap-4 sm:gap-6 lg:gap-6">
            {/* Main stat card */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-xl sm:rounded-2xl" />
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 relative">Average delivery</p>
              <p className="text-6xl sm:text-7xl font-bold bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent relative">72h</p>
              <p className="text-gray-500 text-xs mt-2 relative">From idea to live system*</p>
            </div>

            {/* Value strip cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "⚡", label: "72-Hour Delivery" },
                { icon: "💼", label: "End-to-End Dev & Deploy" },
                { icon: "📊", label: "Built for Growth" },
                { icon: "🔍", label: "Transparent Pricing" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12 animate-bounce" style={{ zIndex: 2 }}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </section>
  );
}