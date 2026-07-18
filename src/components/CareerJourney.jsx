import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiSocketdotio, SiJsonwebtokens, SiAmazon, SiGit, SiCplusplus, SiHtml5, SiCss3 } from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const journeyData = [
  {
    id: 1,
    company: "INLIGHN X",
    role: "FULL STACK DEVELOPER INTERN",
    duration: "Jan 2026 – May 2026",
    location: "Remote",
    status: "COMPLETED",
    description: "Contributed to the development of production-ready full-stack web applications using the MERN stack. Collaborated with development teams to build scalable frontend interfaces, secure backend APIs, authentication systems, and real-time features while following modern software engineering practices and Agile workflows.",
    responsibilities: [
      "Developed reusable React.js components with responsive UI using Tailwind CSS.",
      "Built secure REST APIs using Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication and role-based access control (RBAC).",
      "Integrated Cloudinary, Amazon S3, Socket.IO, and Razorpay into client projects.",
      "Worked on Hospital Management, Restaurant Management, Employee Monitoring System, Test Series, and News CMS.",
      "Optimized application performance, fixed bugs, and collaborated using Git & GitHub."
    ],
    achievements: [
      "Successfully delivered 7+ enterprise-level projects.",
      "Built 3+ independent production modules.",
      "Strengthened expertise in full-stack architecture, API development, and scalable application design."
    ],
    technologies: [
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: null, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "REST API", icon: null, color: "text-purple-400" },
      { name: "Cloudinary", icon: null, color: "text-blue-500" },
      { name: "Amazon S3", icon: SiAmazon, color: "text-orange-400" },
      { name: "Git", icon: SiGit, color: "text-red-500" }
    ]
  },
  {
    id: 2,
    company: "METCONNECT INFOTECH",
    role: "FULL STACK DEVELOPER INTERN",
    duration: "Jan 2026 – May 2026",
    location: "Lucknow, India",
    status: "ACTIVE MISSION",
    description: "Completed an intensive industrial internship focused on full-stack web development. Designed and developed enterprise-grade MERN applications, collaborated on multiple client solutions, and gained practical experience in software architecture, API integration, authentication, deployment workflows, and team-based development.",
    responsibilities: [
      "Designed responsive dashboards and admin panels using React.js.",
      "Developed scalable backend services with Express.js and MongoDB.",
      "Created CRUD modules, authentication systems, and RESTful APIs.",
      "Integrated third-party services including Cloudinary, Razorpay, and AWS S3.",
      "Participated in debugging, testing, feature development, and deployment activities.",
      "Followed Agile methodology with Git-based version control."
    ],
    projects: [
      "Employee Monitoring System",
      "Hospital Management System",
      "Restaurant Management System",
      "Test Series Platform",
      "Nation News CMS",
      "Driver Booking System",
      "Answer Writing & Mentorship Platform"
    ],
    technologies: [
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: null, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "Git", icon: SiGit, color: "text-red-500" },
      { name: "Cloudinary", icon: null, color: "text-blue-500" },
      { name: "AWS S3", icon: SiAmazon, color: "text-orange-400" }
    ]
  },
  {
    id: 3,
    company: "SR INSTITUTE OF MANAGEMENT",
    role: "B.Tech (Computer Science)",
    duration: "Aug 2022 – Jul 2026",
    location: "Lucknow, India",
    status: "ACADEMIC RUNTIME",
    description: "Completed a Bachelor's degree in Computer Science & Engineering with a strong academic foundation in software engineering, data structures & algorithms, operating systems, database management systems, computer networks, and modern web technologies. Actively developed multiple real-world projects and gained hands-on experience through internships and software development.",
    academicHighlights: [
      "CGPA: 8.8 / 10",
      "Specialized in Full Stack Web Development (MERN Stack)",
      "Built 10+ real-world software projects",
      "Completed industrial internship in Full Stack Development",
      "Strong understanding of DSA, DBMS, OS, CN, OOP, and Software Engineering"
    ],
    coursework: [
      "Data Structures & Algorithms", 
      "Database Management Systems", 
      "Operating Systems", 
      "Computer Networks", 
      "Object-Oriented Programming", 
      "Software Engineering", 
      "Web Technologies", 
      "Artificial Intelligence", 
      "Machine Learning"
    ],
    technologies: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: null, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Git", icon: SiGit, color: "text-red-500" },
      { name: "REST APIs", icon: null, color: "text-purple-400" }
    ]
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'ACTIVE MISSION': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
    case 'COMPLETED': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    case 'ACADEMIC RUNTIME': return 'text-teal-400 bg-teal-400/10 border-teal-400/20';
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  }
};

const CareerJourney = () => {
  const [activeTab, setActiveTab] = useState(journeyData[0].id);

  const activeData = journeyData.find(d => d.id === activeTab);

  return (
    <section id="career" className="py-20 relative bg-[#050505] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 uppercase">
            <span className="text-white">Career</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-400 tracking-[0.2em] font-mono uppercase">
            A Timeline of Impact, Growth and Software Engineering Architecture Innovation
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Timeline Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col relative">
            <div className="text-xs text-gray-500 tracking-widest font-mono mb-8 flex items-center gap-2">
              <span className="text-blue-500">{'>_'}</span> MISSIONS SELECTION INDEX
            </div>
            
            <div className="relative pl-6 space-y-4">
              {/* Vertical Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>

              {journeyData.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent group",
                    activeTab === item.id 
                      ? "bg-white/[0.03] border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]" 
                      : "hover:bg-white/[0.02] hover:border-white/10"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className={cn(
                    "absolute -left-[29px] top-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full border-2 transition-colors duration-300 z-10 bg-[#050505]",
                    activeTab === item.id ? "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" : "border-gray-600 group-hover:border-gray-400"
                  )}>
                    {activeTab === item.id && (
                      <div className="absolute inset-0 m-auto w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  <div className={cn(
                    "text-[10px] uppercase font-mono tracking-wider px-2 py-1 rounded border inline-block mb-3",
                    getStatusColor(item.status)
                  )}>
                    {item.status}
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold transition-colors duration-300",
                    activeTab === item.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                  )}>
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.role}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 font-mono">
                    <FaRegCalendarAlt />
                    <span>{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden h-full"
              >
                {/* Subtle corner gradients in card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="text-[10px] text-purple-400 tracking-[0.2em] font-mono mb-6 uppercase">
                  MISSION SPECIFICATIONS // CORE_DETAILS
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                    {activeData.company}
                  </h3>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded uppercase">
                      {activeData.role.includes("INTERN") ? "FULL STACK INTERN" : "B.TECH STUDENT"}
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded flex items-center gap-1">
                       {activeData.duration}
                    </span>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded uppercase">
                      {activeData.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base">
                  {activeData.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Left Column: Responsibilities / Highlights */}
                  <div>
                    <div className="text-xs text-gray-500 tracking-widest font-mono mb-4 flex items-center gap-2">
                      <span className="text-blue-500">{'>_'}</span> 
                      {activeData.responsibilities ? 'KEY RESPONSIBILITIES' : 'ACADEMIC HIGHLIGHTS'}
                    </div>
                    <ul className="space-y-3">
                      {(activeData.responsibilities || activeData.academicHighlights).map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                          <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={14} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements / Projects / Coursework */}
                    {(activeData.achievements || activeData.projects || activeData.coursework) && (
                      <div className="mt-8">
                        <div className="text-xs text-gray-500 tracking-widest font-mono mb-4 flex items-center gap-2">
                          <span className="text-blue-500">{'>_'}</span> 
                          {activeData.achievements ? 'ACHIEVEMENTS' : activeData.projects ? 'PROJECTS CONTRIBUTED' : 'KEY COURSEWORK'}
                        </div>
                        <ul className="space-y-2">
                          {(activeData.achievements || activeData.projects || activeData.coursework).map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Technologies */}
                  <div>
                    <div className="text-xs text-gray-500 tracking-widest font-mono mb-4 flex items-center gap-2">
                      <span className="text-blue-500">{'>_'}</span> TECHNOLOGIES {activeData.id === 3 ? 'LEARNED' : 'USED'}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {activeData.technologies.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all gap-2 min-w-[80px]"
                        >
                          {tech.icon ? (
                            <tech.icon className={cn("text-2xl", tech.color)} />
                          ) : (
                            <LuBrainCircuit className={cn("text-2xl", tech.color)} />
                          )}
                          <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
