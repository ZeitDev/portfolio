import React, { useEffect } from "react";

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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b relative overflow-hidden py-20">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#04081A]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section header */}
      <div className="relative text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
          Support my Vision
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
        <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
          I'm driven by a deep curiosity for technology. To me, coding feels like
          magic. I love the process of building things from scratch — taking an
          idea and turning it into something real that can help people. This
          includes projects like a scheduling bot for gaming sessions with
          friends, the Aerial C-Camera-Simulator, and diving deep into my
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

      {/* Glowing background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default SupportMeSection;
