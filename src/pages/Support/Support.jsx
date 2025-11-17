import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ShimmeringBackground from "../../components/ShimmeringBackground/ShimmeringBackground";

const SupportMeSection = () => {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "zeitler");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "");
    script.setAttribute("data-color", "#40DCA5");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    script.onload = () => {
      console.log("Buy Me a Coffee widget loaded successfully.");
    };

    script.onerror = () => {
      console.error("Failed to load Buy Me a Coffee widget.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b relative overflow-hidden pt-32 pb-16">
      <ShimmeringBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Support my Vision
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Your support helps me dedicate more time and resources to my projects
          and ideas.
        </p>
      </motion.div>

      {/* Section content */}
      <div className="relative text-center mb-16 max-w-3xl mx-auto">
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium tracking-wide">
          I'm driven by a deep curiosity for technology. To me, coding feels like
          magic. I love the process of building things from scratch — taking an
          idea and turning it into something real that can help people. This
          includes projects like a scheduling bot for gaming sessions with
          friends, the Aerial Camera Simulator, and diving deep into my
          biomedical research.
          <br />
          <br />
          I'm always learning, from participating in coding competitions, to
          developing AI for my master's thesis on the future of robot-assisted
          surgery or experimenting with new frameworks and tech like Large
          Language Models.
          <br />
          <br />
          Your support helps me dedicate more time and resources to these
          projects. Every contribution fuels new ideas and helps cover the costs
          of development — like electricity for my PC, new tech to experiment
          with, framework costs, or buying 3D assets (because trust me, you don't
          want to see my modeling skills).
          <br />
          <br />
          And, of course, it keeps me supplied with coffee for those late-night
          coding sessions.
          <br />
          <br />
          I'm incredibly grateful to everyone who has supported my journey so
          far. Thank you for checking out my work and helping me realize my
          visions!
        </p>
      </div>

      {/* Buy Me a Coffee and PayPal Donation Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full px-6 space-y-4 md:space-y-0 md:space-x-4">
        <a
          href="https://www.buymeacoffee.com/zeitler"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors"
        >
          Buy me a Coffee
        </a>
        <a
          href="https://www.paypal.me/zeitlerdev"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Support me via PayPal
        </a>
      </div>
    </section>
  );
};

export default SupportMeSection;
