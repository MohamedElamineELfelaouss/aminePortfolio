"use client";

import {
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si";

// about data

const about = {
    title: "About Me",
    description: "I'm a full-stack developer with a passion for building web applications that are scalable, secure, and user-friendly. I have experience working with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, and more. I'm always eager to learn new things and take on new challenges. Let's work together to bring your ideas to life!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Mohamed Elamine EL Felaouss"
        },
        {
            fieldName: "Phone",
            fieldValue: "+212 766286897"
        },
        {
            fieldName: "Experience",
            fieldValue: "4 Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Moroccan"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Arabic, Russian"
        },
    ]
};

// experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: "I have worked with a variety of clients and projects, ranging from small businesses to large corporations. Here are some of the highlights of my experience:",
    items: [
        {
            company: "Tech Solutions Inc",
            position: "Full-Stack Developer",
            period: "Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            period: "Summer 2023",
        },
        {
            company: "Fiverr/Freelancer",
            position: "Freelance Developer",
            period: "2021-2023",
        },
    ],
};
// education data

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "I have a strong educational background in computer science and web development. Here are some of the highlights of my education:",
    items: [
        {
            institution: "Groupe Scolaire la Résidence",
            degree: "baccalaureate degree in physical sciences",
            period: "2021",
        },
        {
            institution: "Ryazan State Radio Engineering University",
            degree: "student in computer science",
            period: "2021-2022",
        },
        {
            institution: "Ryazan State Radio Engineering University",
            degree: "student in computer science",
            period: "2021-2022",
        },
        {
            institution: "University of London",
            degree: "Computer Programming",
            period: "2022",
        },
        {
            institution: "University of Michigan",
            degree: "Python for Everybody Specialization",
            period: "2022",
        },
        {
            institution: "tryHackMe",
            degree: "Cyber Security",
            period: "2023",
        },
        {
            institution: "freeCodeCamp",
            degree: "Responsive web Design",
            period: "2024",
        },
        {
            institution: "ALX Africa",
            degree: "Back-end web developers",
            period: "2023 (6 months)",
        },
        {
            institution: "Institute Specialized Technology Applied Ntic (ISTA)",
            degree: "Full Stack Developer",
            period: "2023-2025",
        },
    ]
};

// skills data

const skills = {
    title: "My skills",
    description: "I have a wide range of skills in web development, design, and more. Here are some of the technologies and tools I work with:",
    skillList: [
        {
            name: "HTML 5",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS 3",
            icon: <FaCss3 />,
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
        },
        {
            name: "React.js",
            icon: <FaReact />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs />,
        },
        {
            name: "Figma",
            icon: <FaFigma />,
        },
    ]
};

import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger}
    from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";


import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
        opacity: 1, 
        transition: {delay: 0.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>
                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item,index)=> {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.period}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left gap-3">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item,index)=> {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.period}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left gap-3">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                {skills.skillList.map((skill,index)=> {
                                    return (
                                        <li key={index} >
                                            <TooltipProvider delayDuration={100} >
                                                <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                       <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>    
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5
                            mx-auto xl:mx-0 bg-[#232329] p-6 rounded-xl max-w-[620px] ">
                                {about.info.map((item,index)=> {
                                    return <li key={index}
                                    className="flex items-center justify-center xl:justify-start gap-4"
                                    >
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-l ">{item.fieldValue}</span>
                                    </li>
                                })}
                            </ul>
                        
                        </div>
                    </TabsContent>
                </div>
            
            </Tabs>
        </div>
    </motion.div>
    );
};

export default Resume;