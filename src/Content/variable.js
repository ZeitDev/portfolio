import me from '../Images/me.png'
import acs from '../Images/acs.PNG'
import bachelorthesis from '../Images/bachelorthesis.png'
import stenosis from '../Images/stenosis.png'
import placeholder from '../Images/shape4.png'

export const menuItems = [
    {section:'#aboutme', text:'ABOUT'},
    {section:'#skills', text:'SKILLS'},
    {section:'#project', text:'PROJECTS'},
    {section:'#contact', text:'CONTACT'},
]

export const nameCapitals = "Léon Zeitler"
export const roleCapitales = "SCIENTIST / ENGINEER / DEVELOPER"

export const bioContent = [
    "I am currently a Master's student in Biomedical Engineering Science at the Hamburg University of Technology and interested in Artifical Intelligence, Data Science, Extended Reality and Software Developement. In my free time, I go swimming and enjoy flight simulators.",
    'I have in hand experience in Python, Deep Learning, Unreal Engine and Unity.'
]

export const bioImage = me

export const allSkills = [
    {name:'Python', level:'expert'},
    {name:'Deep Learning', level:'advanced'},
    {name:'Unreal Engine', level:'intermediate'},
    {name:'Unity', level:'basic'}
]

export const allProjects = [
    {name: "Aerial Camera Simulator", role: "Solo Developer", image: acs, desc: "A simulator for the 3D moving cable-suspended camera system, which is often used at sporting events such as soccer to provide a unique perspective. Controlling such systems requires a great deal of practice and coordination.", skillsArr: ["UNREAL ENGINE", "C++"], links: [{text: "View on App Store", href: ""}, {text: "View on Windows Store", href: ""}]},
    {name: "CNN based Distance Prediction", role: "Bachelor Thesis", image: bachelorthesis, desc: "Training of Convolutional Neural Networks (CNN) to predict the distance between raw ultrasound slice images to later reconstruct previously not seen 3D structures in phantoms.", skillsArr: ["PYTHON", "PYTORCH", "ROBOTICS"], links: []},
    {name: "CV guided Robotic Needle Placement", role: "Team Lead", image: placeholder, desc: "University project in which we did a simulated autonomous autopsy on a phantom using pointcloud registration, path and trajectory planning.", skillsArr: ["PYTHON", "OPENCV", "ROS", "ROBOTICS"], links: []},
    {name: "Stenosis Analysis Software", role: " ", image: stenosis, desc: "University project in which we developed an application for the visualization and analysis of blood vessel constrictions.", skillsArr: ["PYTHON", "OPENCV", "ROS", "ROBOTICS"], links: []},
]

export const linkedInLink = "https://www.linkedin.com/in/l%C3%A9on-zeitler/"
export const gitHubLink = "https://github.com/ZeitDev"
export const emailAddress = "contact@leonzeitler.com"