import me from '../Images/me.png'
import acs from '../Images/acs.PNG'
import bachelorthesis from '../Images/bachelorthesis.png'
import stenosis from '../Images/stenosis.png'
import cvguidedrobot from '../Images/cvguidedrobotic.png'

export const menuItems = [
    {section:'#aboutme', text:'ABOUT'},
    {section:'#skills', text:'SKILLS'},
    {section:'#project', text:'PROJECTS'},
    {section:'#contact', text:'CONTACT'},
]

export const nameCapitals = "Léon Zeitler"
export const roleCapitales = "ENGINEER / DEVELOPER"

export const bioContent = [
    "Currently pursuing a Master's degree in Biomedical Engineering Science at the Hamburg University of Technology, I have a strong interest in Artificial Intelligence, Data Science, Extended Reality, and Software Development. Outside of my studies, I enjoy swimming and flight simulators.",
    'I have in hand experience in Deep Learning, Coding, Unreal Engine and Unity.'
]

export const bioImage = me

export const allSkills = [
    {name:'Coding', level:'advanced'},
    {name:'Deep Learning', level:'advanced'},
    {name:'Unreal Engine', level:'intermediate'},
    {name:'Unity', level:'basic'}
]

export const allProjects = [
    {name: "Aerial Camera Simulator", role: "Solo Developer", image: acs, desc: "Developed a simulator for the 3D moving cable-suspended camera system, commonly used at sporting events like soccer for unique perspectives. Mastering the control of these systems demands significant practice and coordination.", skillsArr: ["UNREAL ENGINE", "C++"], links: [{text: "View on App Store", href: ""}, {text: "View on Windows Store", href: ""}]},
    {name: "CNN based Distance Prediction", role: "Bachelor Thesis", image: bachelorthesis, desc: "Trained Convolutional Neural Networks (CNNs) to estimate the distance between sequential raw ultrasound slice images to reconstruct previously unseen 3D structures in artificial tissue.", skillsArr: ["PYTHON", "PYTORCH", "ROBOTICS"], links: []},
    {name: "CV guided Robotic Needle Placement", role: "Team Lead", image: cvguidedrobot, desc: "As the Team Lead for this university project, I guided our team in developing a system for simulated autonomous autopsy on a phantom. Our approach involved leveraging pointcloud registration along with low-level path and trajectory planning to guide robotic needle placement.", skillsArr: ["PYTHON", "OPENCV", "ROS", "ROBOTICS"], links: []},
    {name: "Stenosis Analysis Software", role: " ", image: stenosis, desc: "University project where our team developed an application for the visualization and analysis of blood vessel constrictions (stenosis).", skillsArr: ["MATLAB"], links: []},
]

export const linkedInLink = "https://www.linkedin.com/in/l%C3%A9on-zeitler/"
export const gitHubLink = "https://github.com/ZeitDev"
export const emailAddress = "contact@leonzeitler.com"