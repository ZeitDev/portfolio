import React, { useState, useEffect } from "react";
import { Send, Phone, MapPin, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShimmeringBackground from "../../components/ShimmeringBackground/ShimmeringBackground";

export default function Contact() {
  // Scroll to a small offset from the top on mount
  useEffect(() => {
    window.scrollTo(0, 50); // Adjust 60 to your preferred offset
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "f5cf6627-afff-4c1f-bc96-48f9ab21bc45"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
      <section className="hero min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-32"> {/* Adjusted justify-start */}
        <div className="container mx-auto flex flex-col items-center"> {/* Added flex and items-center */}
          <ShimmeringBackground />
          <div className="relative z-10 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Feel free to connect with me!
              </p>
            </motion.div>
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6 flex flex-col items-center w-full max-w-lg"> {/* Adjusted items-start to items-center */}
                <div className="flex items-center w-full space-x-4">
                  <a
                    href="mailto:contact@leonzeitler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-500/10 p-4 rounded-lg h-16 w-16"
                  >
                    <Mail className="w-8 h-8 text-teal-400" />
                  </a>
                  <div className="text-left w-full">
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-400 text-base">
                      <a
                        href="mailto:contact@leonzeitler.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        contact@leonzeitler.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-4">
                  <a
                    href="https://www.linkedin.com/in/l%C3%A9on-zeitler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-500/10 p-4 rounded-lg h-16 w-16"
                  >
                    <Linkedin className="w-8 h-8 text-teal-400" />
                  </a>
                  <div className="text-left w-full">
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <p className="text-gray-400 text-base">
                      <a
                        href="https://www.linkedin.com/in/l%C3%A9on-zeitler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/l%C3%A9on-zeitler/
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-4">
                  <a
                    href="https://github.com/ZeitDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-500/10 p-4 rounded-lg h-16 w-16"
                  >
                    <Github className="w-8 h-8 text-teal-400" />
                  </a>
                  <div className="text-left w-full">
                    <h3 className="font-semibold text-lg">GitHub</h3>
                    <p className="text-gray-400 text-base">
                      <a
                        href="https://github.com/ZeitDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/ZeitDev
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full space-x-4">
                  <a
                    href="https://www.instagram.com/zeitler.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-purple-500/10 p-4 rounded-lg h-16 w-16"
                  >
                    <Instagram className="w-8 h-8 text-teal-400" />
                  </a>
                  <div className="text-left w-full">
                    <h3 className="font-semibold text-lg">Instagram</h3>
                    <p className="text-gray-400 text-base">
                      <a
                        href="https://www.instagram.com/zeitler.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        instagram.com/zeitler.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center pb-4 bg-[#04081A] z-50">
        <div className="text-gray-400 text-sm space-x-4">
          <Link
            to="/legalnotice"
            className="hover:underline hover:text-purple-400 transition-colors"
          >
            Legal Notice
          </Link>
          <span>|</span>
          <Link
            to="/privacypolicy"
            className="hover:underline hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
