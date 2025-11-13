import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Import local images
import acsImage from "../../assets/images/acs.png";
import bachelorImage from "../../assets/images/bachelorthesis.png";
import cvguidedroboticImage from "../../assets/images/cvguidedrobotic.png";
import stenosisImage from "../../assets/images/stenosis.png";

const projects = [
	{
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
		title: "A sleek portfolio built with React and Tailwind CSS ",
		description:
			"A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
		src: bachelorImage,
		color: "#8f89ff",
		links: [
			{ name: "GitHub", href: "#" },
			{ name: "Live Demo", href: "#" },
		],
	},
	{
		title: "🚀 MySocial",
		description:
			"A modern social media platform built with React and Tailwind CSS, offering real-time messaging, stories, sleek UI, and seamless user interaction to connect and share effortlessly! 📱✨",
		src: cvguidedroboticImage,
		color: "#fff",
		links: [
			{ name: "GitHub", href: "" },
			{ name: "Live Demo", href: "" },
		],
	},
	{
		title: "CodeKori 🔥",
		description:
			"CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
		src: stenosisImage,
		color: "#ed649e",
		links: [
			{ name: "GitHub", href: "" },
			{ name: "Live Demo", href: "" },
		],
	},
];

export default function Projects() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fade out between 0% and 10% scroll progress

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
				<section className="text-white w-full bg-slate-950">
					{projects.map((project, i) => {
						const targetScale = 1 - (projects.length - i) * 0.05;
						return (
							<Card
								key={`p_${i}`}
								i={i}
								url={project.link}
								title={project.title}
								color={project.color}
								description={project.description}
								progress={scrollYProgress}
								range={[i * 0.25, 1]}
								targetScale={targetScale}
								links={project.links} // Pass links to Card
								src={project.src} // Pass src to Card
							/>
						);
					})}
				</section>
				<motion.div
					className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
					style={{ opacity: indicatorOpacity }}
				>
					<span className="text-gray-400 flex items-center justify-center gap-2 -ml-20">
						<i className="fas fa-mouse text-blue-400"></i>
						Scroll down to see more
					</span>
					<i className="fas fa-chevron-down text-blue-400 text-xl"></i>
				</motion.div>
			</main>
		</ReactLenis>
	);
}

function Card({
	i,
	title,
	description,
	src, // Use src for the image path
	color,
	progress,
	range,
	targetScale,
	links, // Replace githubLink and liveLink with links
}) {
	const container = useRef(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="h-screen flex items-center justify-center sticky top-0 project-container"
		>
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
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
					{/* Image section - full width on mobile, 55% on desktop */}
					<div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
						<motion.img
							src={src} // Use the src property for the image
							alt={title}
							className="w-full h-full object-contain" // Updated to use object-contain
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.4 }}
						/>

						{/* Colored overlay on hover */}
						<motion.div
							className="absolute inset-0"
							style={{ backgroundColor: color, mixBlendMode: "overlay" }}
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 0.3 }}
							transition={{ duration: 0.3 }}
						/>

						{/* Project number */}
						<div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
							Project {i + 1}
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
	src: PropTypes.string.isRequired,
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
