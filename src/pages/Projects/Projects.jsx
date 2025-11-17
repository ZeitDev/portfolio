import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Import local images
import acsImage from "../../assets/images/acs.png";
import bachelorImage from "../../assets/images/bachelorthesis.png";
import cvguidedroboticImage from "../../assets/images/cvguidedrobotic.png";
import stenosisImage from "../../assets/images/stenosis.png";
import healthGemImage from "../../assets/images/HealthGem.png";
import masterImage from "../../assets/images/frame228.png";
import ShimmeringBackground from "../../components/ShimmeringBackground/ShimmeringBackground";

const projects = [
	{
		status: "Active",
		title: "Aerial Camera Simulator",
		description:
			"Developed a simulator for the 3D moving cable-suspended camera system, commonly used at sporting events like soccer for unique perspectives. Mastering the control of these systems demands significant practice and coordination in a very dynamic environment.",
		src: acsImage,
		color: "#5196fd",
		links: [
			{ name: "Steam Store", href: "https://store.steampowered.com/app/3812560/Aerial_Camera_Simulator" },
		],
	},
	{
		status: "Active",
		title: "Spatial Scene Understanding in robot-assisted Surgery",
		description:
			"Developing a Multi-Teacher, Multi-Task deep learning framework to simultaneously perform surgical instrument segmentation and depth estimation of the scene.",
		src: masterImage,
		color: "#4cafb5", // Adjusted to a teal shade
		links: [
			//{ name: "Github", href: "https://github.com/ZeitDev/SIDE" },
		],
	},
	{
		status: "Finished",
		title: "HealthGem - Personalized Medical Diary",
		description:
			"Record medical incidents intelligently to reveal long-term disease patterns or help physicians diagnose rare diseases with the power of the Gemma 3n LLM by Google.",
		src: healthGemImage,
		color: "#8f89ff",
		links: [
			{ name: "Kaggle (Full Writeup)", href: "https://www.kaggle.com/competitions/google-gemma-3n-hackathon/writeups/healthgem-a-personalized-medical-diary" }
		],
	},
	{
		status: "Finished",
		title: "CNN based Depth Estimation",
		description:
			"Trained Convolutional Neural Networks (CNNs) to estimate the depth between sequential raw 2D ultrasound slice images to reconstruct previously unseen 3D structures in artificial tissue.",
		src: bachelorImage,
		color: "#ff8c42", // Adjusted to a warm orange shade
		links: [

		],
	},
	{
		status: "Finished",
		title: "Computer-Vision guided robotic Biopsy",
		description:
			"As the Lead for this university project, I guided our team in developing a system for simulated autonomous autopsy on a phantom. Our approach involved leveraging pointcloud registration along with low-level path and trajectory planning to guide the robotic needle placement.",
		src: cvguidedroboticImage,
		color: "#ffd700", // Adjusted to a golden yellow shade
		links: [
			{ name: "GitHub", href: "https://github.com/ZeitDev/cv_guided_needle_placement" }
		],
	},
	{
		status: "Finished",
		title: "Full Body Tracking in Unity",
		description:
			"Built a real-time system in Unity that uses the Azure Kinect for full-body motion capture. This project focused on streaming the Kinect's skeletal data to drive a 3D avatar, enabling immersive virtual interactions.",
		video: "https://www.youtube.com/embed/mLDMVa3GyyY?autoplay=1&mute=1&loop=1&playlist=mLDMVa3GyyY", // Added loop and playlist parameters
		color: "#6a5acd", // Adjusted to a soft purple shade
		links: [
		],
	},
	{
		status: "Finished",
		title: "Stenosis Analysis Software",
		description:
			"University project where our team developed an application for the visualization and analysis of blood vessel constrictions (stenosis).",
		src: stenosisImage,
		color: "#ed649e",
		links: [

		],
	},
];

export default function Projects() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	// Fix: Always scroll to top on mount (especially for mobile)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const indicatorOpacity = useTransform(scrollYProgress,  [0, 0.06, 0.12, 0.16,
	// 	 													0.18, 0.24, 0.3, 0.34,
	// 														0.36, 0.38, 0.44, 0.48,
	// 														0.50, 0.56, 0.60, 0.64,
	// 														0.66, 0.72, 0.76, 0.80,
	// 														0.82, 0.88, 1],
	// 														[1, 0, 0, 1,
	// 														1, 0, 0, 1,
	// 														1, 0, 0, 1,
	// 														1, 0, 0, 1,
	// 														1, 0, 0, 1, 
	// 														1, 0, 0]); // Added a fade-out range after the second card
	const indicatorOpacity = useTransform(scrollYProgress,  [0, 0.75, 0.75, 1], [1, 1, 1, 0]); // Added a fade-out range after the second card
												

	useEffect(() => {
		// Add specific styles for 1366x768 resolution
		const style = document.createElement("style");
		style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
		document.head.appendChild(style);

		// Resolution check function
		const checkResolution = () => {
			const isTargetResolution =
				window.innerWidth >= 1360 &&
				window.innerWidth <= 1370 &&
				window.innerHeight >= 760 &&
				window.innerHeight <= 775;

			if (isTargetResolution) {
				document.documentElement.style.setProperty("--project-scale", "0.85");
				document.documentElement.style.setProperty("--project-margin", "-5vh");
			} else {
				document.documentElement.style.setProperty("--project-scale", "1");
				document.documentElement.style.setProperty("--project-margin", "0");
			}
		};

		checkResolution();
		window.addEventListener("resize", checkResolution);

		return () => {
			document.head.removeChild(style);
			window.removeEventListener("resize", checkResolution);
		};
	}, []);

	return (
		<ReactLenis root>
			<main className="bg-black" ref={container}>
				<section className="text-white w-full bg-slate-950 pt-32 relative">
					<ShimmeringBackground />
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-0 md:mb-0 relative z-10"
					>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
							My Projects
						</h2>
						<p className="text-gray-300 max-w-2xl mx-auto text-lg mb-16 md:mb-0">
							A showcase of my work, from AI research to software development and beyond.
						</p>
					</motion.div>
					<motion.div
						className="fixed bottom-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
						style={{ opacity: indicatorOpacity }}
					>
						<div className="animate-bounce flex flex-col items-center gap-2">
							<span className="text-gray-400 text-center flex items-center justify-center gap-2 text-lg md:text-xl">
								<i className="fas fa-mouse text-blue-400"></i>
								Scroll down to learn more
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-10 h-10 text-blue-400"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
								/>
							</svg>
						</div>
					</motion.div>
					{projects.map((project, i) => {
						const targetScale = 1 - (projects.length - i) * 0.05;
						return (
							<Card
								key={`p_${i}`}
								i={i}
								status={project.status}
								url={project.link}
								title={project.title}
								color={project.color}
								description={project.description}
								progress={scrollYProgress}
								range={[i * 0.25, 1]}
								targetScale={targetScale}
								links={project.links}
								src={project.src}
								video={project.video}
							/>
						);
					})}
				</section>
			</main>
		</ReactLenis>
	);
}

function Card({
	i,
	status,
	title,
	description,
	src,
	video,
	color,
	progress,
	range,
	targetScale,
	links,
}) {
	const container = useRef(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="h-screen flex items-center justify-center sticky top-0 project-container z-10"
		>
			<motion.div
				style={{
					scale,
					top: `calc(-20vh + ${i * 25}px)`,
					transform: `scale(var(--project-scale, 1))`,
					marginTop: "var(--project-margin, 0)",
				}}
				className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
				whileHover={{
					y: -8,
					transition: { duration: 0.3 },
				}}
			>
				{/* Modern split card design */}
				<div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
					{/* Media section - Render video or image */}
					<div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
						{video ? (
							<iframe
								src={video} // Use the corrected embed URL
								title={title}
								className="w-full h-full"
								frameBorder="0"
								allow="autoplay; encrypted-media"
								allowFullScreen
							></iframe>
						) : (
							<motion.img
								src={src}
								alt={title}
								className="w-full h-full object-contain"
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.4 }}
							/>
						)}

						{/* Status display */}
						<div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
							{status}
						</div>
					</div>

					{/* Content section - full width on mobile, 45% on desktop */}
					<div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
						<div>
							<div className="flex items-center gap-3 mb-4 md:mb-6">
								<div
									className="w-2 h-2 md:w-3 md:h-3 rounded-full"
									style={{ backgroundColor: color }}
								/>
								<div className="h-[1px] w-12 md:w-20 bg-gray-600" />
							</div>

							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
								{title}
							</h2>
							<p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
								{description}
							</p>
						</div>

						<div className="mt-4 md:mt-auto pt-4">
							<div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

							<div className="flex items-center gap-4">
								{/* Render links dynamically */}
								{links.map((link, index) => (
									<motion.a
										key={index}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-2"
										whileHover={{ y: -3 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										<span
											className="text-xs md:text-sm font-medium"
											style={{ color }}
										>
											{link.name}
										</span>
									</motion.a>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

// Update PropTypes validation
Card.propTypes = {
	i: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	src: PropTypes.string, // Make src optional
	video: PropTypes.string, // Add video as optional
	color: PropTypes.string.isRequired,
	progress: PropTypes.object.isRequired,
	range: PropTypes.array.isRequired,
	targetScale: PropTypes.number.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
		})
	).isRequired,
};
