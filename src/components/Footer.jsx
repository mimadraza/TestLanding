import { Mail, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Services: ["Web Development", "Web App Development", "Mobile Apps", "Industry Solutions"],
  Company: ["About", "Workflow", "Tech Stack", "Contact"],
  Industries: ["Education", "Healthcare", "Retail"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const sectionHrefs = {
  "Web Development": "#services",
  "Web App Development": "#services",
  "Mobile Apps": "#services",
  "Industry Solutions": "#industries",
  "About": "#about",
  "Workflow": "#workflow",
  "Tech Stack": "#tech-stack",
  "Contact": "#contact",
  "Education": "#industries",
  "Healthcare": "#industries",
  "Retail": "#industries",
  "Privacy Policy": "#",
  "Terms of Service": "#",
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Main footer content */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">

          {/* Brand + contact */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-4">
              <img src="/logo.svg" alt="AmicoTechs logo" className="brand-logo invert" />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Fast, practical digital solutions — built to launch in 72 hours and built to last.
            </p>

            {/* Social icons */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mb-6">
              <a href="mailto:info@amicotechs.com" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Quick contact form */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-3">Send us a quick message</h4>
              {submitted ? (
                <div className="text-blue-400 text-sm py-2">
                  ✅ Thanks — we'll be in touch soon!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us briefly what you want to build..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500/60 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm transition-all duration-300 hover:opacity-90 text-center"
                  >
                    Send
                  </button>
                </form>
              )}
              <p className="text-gray-500 text-xs mt-2">
                Or email us directly:{" "}
                <a href="mailto:info@amicotechs.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  info@amicotechs.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer link columns */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href={sectionHrefs[link] || "#"}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} AmicoTechs. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}