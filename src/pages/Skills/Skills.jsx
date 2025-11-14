import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Brain } from "lucide-react";
import {
  FaGitAlt,
  FaLinux,
  FaPython,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiMlflow,
  SiPytorch,
  SiOpencv,
  SiUnrealengine,
  SiUnity,
  SiLatex,
  SiBlender,
  SiRos,
  SiLangchain,
  SiMeta,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { 
  RiGeminiLine 
} from "react-icons/ri";
import { 
  GiRobotGrab,
  GiProcessor,
  GiSkills,
  GiArtificialIntelligence,
 } from "react-icons/gi";

import { TbBrandVscode } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      icon: GiArtificialIntelligence,
      title: "Deep Learning & LLMs",
      color: "text-indigo-400", // Adjusted color to better fit the theme
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
        { name: "MLflow", icon: <SiMlflow className="w-4 h-4 text-[#0194E2]" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" /> },
        { name: "Gemini", icon: <RiGeminiLine className="w-4 h-4 text-[#0077FF]" /> },
        { name: "Gemma 3n", icon: <RiGeminiLine className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "LangChain", icon: <SiLangchain className="w-4 h-4 text-[#FFD700]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frameworks",
      color: "text-purple-400",
      skills: [
        { name: "Unreal Engine", icon: <SiUnrealengine className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "Unity", icon: <SiUnity className="w-4 h-4 text-[#FFFFFF]" /> },
      ],
    },
    {
      icon: GiProcessor,
      title: "Hardware",
      color: "text-green-400",
      skills: [
        { name: "Microsoft HoloLens 2", icon: <FaMicrosoft className="w-4 h-4 text-[#0078D7]" /> },
        { name: "Meta Quest 3", icon: <SiMeta className="w-4 h-4 text-[#4267B2]" /> },
        { name: "Azure Kinect", icon: <FaMicrosoft className="w-4 h-4 text-[#0078D7]" /> },
        { name: "Universal Robot", icon: <GiRobotGrab className="w-4 h-4 text-[#FFD700]" /> },
        { name: "Franka Emika Panda Robot", icon: <GiRobotGrab className="w-4 h-4 text-[#FF5733]" /> },
      ],
    },
    {
      icon: SiPython,
      title: "Languages",
      color: "text-red-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },
        { name: "Matlab", icon: <BsGrid1X2 className="w-4 h-4 text-[#E16737]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "LaTeX", icon: <SiLatex className="w-4 h-4 text-[#008080]" /> },
        { name: "Blender", icon: <SiBlender className="w-4 h-4 text-[#F5792A]" /> },
        { name: "ROS", icon: <SiRos className="w-4 h-4 text-[#22314E]" /> },
      ],
    },
    {
      icon: GiSkills,
      title: "Other",
      color: "text-yellow-400",
      skills: [
        { name: "Strategic", icon: <MdAnimation className="w-4 h-4 text-[#FF80AB]" /> },
        { name: "Gritty", icon: <MdAnimation className="w-4 h-4 text-[#69F0AE]" /> },
        { name: "Inquisitive", icon: <MdAnimation className="w-4 h-4 text-[#B388FF]" /> },
        { name: "Thorough", icon: <MdAnimation className="w-4 h-4 text-[#FF80AB]" /> },
        { name: "Holistic", icon: <MdAnimation className="w-4 h-4 text-[#69F0AE]" /> },
        { name: "Collaborative", icon: <MdAnimation className="w-4 h-4 text-[#B388FF]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;