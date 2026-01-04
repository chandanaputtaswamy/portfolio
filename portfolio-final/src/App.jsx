import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, X } from 'lucide-react';
import myLocalImage from './assets/my-profile-photo.jpg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioData = {
    name: "Chandana Puttaswamy",
    title: "AI & DATA SCIENCE STUDENT | ASPIRING DATA ANALYST",
    profileImage: myLocalImage,
    about: {
      intro: "I'm a third-year Artificial Intelligence & Data Science student with a strong interest in building practical, real-world solutions using data and technology. I enjoy working at the intersection of logic, problem-solving, and impact-driven development.",
      experience: "I have experience with Python, C, C++, HTML, CSS, JavaScript, Node.js, and MongoDB, and I've worked on projects focused on sustainability, accessibility, and student-centric platforms. I'm passionate about learning by building and constantly improving my skills.",
      goal: "My goal is to start my career as a Data Analyst and grow into a Data Scientist, gaining hands-on industry experience along the way. This portfolio showcases my journey of learning, building, and evolving as a developer."
    },
    skills: ["Python", "C, C++", "HTML, CSS, JavaScript", "Node.js", "MongoDB", "Git & GitHub", "VS Code / Cursor", "MongoDB Atlas", "Problem Solving", "Logical & Analytical Thinking", "Team Collaboration"],
    projects: [
      {
        id: 1,
        title: "Smart College Notice Tracker",
        problem: "Students often miss important college notices due to scattered communication channels.",
        techStack: "HTML, CSS, JavaScript, Node.js, MongoDB",
        description: "Designed and built a role-based web application where admins can upload notices and students can securely view them in one place. Implemented authentication, notice uploads, and database integration.",
        github: "https://github.com/chandanaputtaswamy/SmartCollegeNoticeTracker",
        demo: "https://smart-college-notice-tracker.onrender.com/",
        color: "from-purple-600 to-violet-400"
      },
      {
        id: 2,
        title: "PranaVayu – Air Quality Monitoring App",
        problem: "People lack easy access to real-time air quality data for informed health decisions.",
        techStack: "JavaScript, APIs, HTML, CSS",
        description: "Developed a city-based air quality information system that fetches and displays AQI data in a simple, user-friendly interface.",
        github: "https://github.com/chandanaputtaswamy/Airpurifier-practice",
        color: "from-violet-500 to-fuchsia-400"
      },
      {
        id: 3,
        title: "Accessible Transport Assistance Platform",
        problem: "Disabled individuals face difficulty finding accessible routes and nearby facilities.",
        techStack: "HTML, CSS, JavaScript",
        description: "Collaborated in designing an accessibility-focused web platform highlighting routes, facilities, and navigation support.",
        github: "https://github.com/chandanaputtaswamy/EmpowerNave",
        color: "from-indigo-600 to-purple-500"
      }
    ],
    contact: {
      email: "chandanaputtaswamy481@gmail.com",
      github: "https://github.com/chandanaputtaswamy",
      linkedin: "https://www.linkedin.com/in/chandana-puttaswamy-63a2602a3/"
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/60 backdrop-blur-xl z-50 border-b border-purple-100 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-800">{portfolioData.name}</h1>
        <div className="flex gap-6 font-medium text-purple-900/70 text-sm">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-600 transition-all hover:scale-105">{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 px-10 md:pl-24 py-10 z-10">
            <p className="text-purple-500 font-bold tracking-widest text-xs mb-4 uppercase">{portfolioData.title}</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-800 mb-6">
              Hello, my name is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Chandana</span>
            </h1>
          </div>

          <div className="relative md:absolute md:right-0 lg:right-[5%] top-1/2 md:translate-y-[-50%] p-10">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-[10px] border-white shadow-2xl overflow-hidden bg-white ring-4 ring-purple-100/50">
              <img 
                src={portfolioData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/400/D8B4FE/FFFFFF?text=Chandana'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-10">
        <div className="max-w-5xl mx-auto glass-card rounded-[30px] p-10 shadow-xl shadow-purple-200/50 border border-white">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-800">
            <span className="w-2 h-10 bg-gradient-to-b from-purple-500 to-fuchsia-400 rounded-full"></span>
            About Me
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
            <p>{portfolioData.about.intro}</p>
            <p>{portfolioData.about.experience}</p>
            <p>{portfolioData.about.goal}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 overflow-hidden bg-white">
        <div className="px-10 mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-4 text-slate-800">
            <span className="w-2 h-10 bg-gradient-to-b from-fuchsia-400 to-purple-500 rounded-full"></span>
            Skills & Technologies
          </h2>
        </div>
        
        <div className="bg-gray-200/50 py-10 border-y border-gray-200 backdrop-blur-sm">
          <div className="flex w-max animate-scroll gap-6 px-10">
            {[...portfolioData.skills, ...portfolioData.skills].map((skill, i) => (
              <div 
                key={i} 
                className="bg-white px-6 py-3 rounded-xl border border-white shadow-sm font-bold text-purple-700 text-base transition-all hover:scale-105 hover:shadow-purple-200/50 whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-10">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 text-slate-800">
          <span className="w-2 h-10 bg-gradient-to-b from-purple-600 to-indigo-400 rounded-full"></span>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-[30px] p-8 shadow-md hover:shadow-purple-300 transition-all cursor-pointer group flex flex-col justify-between h-full border border-white hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <p className="text-base text-slate-600 mb-4"><span className="font-bold text-purple-500">Problem:</span> {project.problem}</p>
                <p className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest">Tech: {project.techStack}</p>
              </div>
              <div className="flex items-center text-purple-600 font-bold gap-2 mt-8 text-sm">
                Learn more <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-10 pb-32">
        <div className="glass-card rounded-[40px] p-12 shadow-2xl shadow-purple-200 border border-white text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-4 text-slate-800">
             <span className="w-2 h-10 bg-gradient-to-b from-purple-500 to-fuchsia-400 rounded-full"></span>
             Let's Connect
          </h2>
          <p className="text-lg text-slate-600 mb-10 mx-auto max-w-2xl">I'm always open to discussing new opportunities or having a conversation about data science.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href={portfolioData.contact.linkedin} className="flex flex-col items-center p-8 bg-white/50 rounded-[30px] hover:bg-purple-100 transition-all group border border-purple-50 shadow-sm">
              <Linkedin size={40} className="text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg text-purple-900">LinkedIn</span>
            </a>
            <a href={portfolioData.contact.github} className="flex flex-col items-center p-8 bg-white/50 rounded-[30px] hover:bg-purple-100 transition-all group border border-purple-50 shadow-sm">
              <Github size={40} className="text-slate-800 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg text-purple-900">GitHub</span>
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="flex flex-col items-center p-8 bg-white/50 rounded-[30px] hover:bg-purple-100 transition-all group border border-purple-50 shadow-sm">
              <Mail size={40} className="text-fuchsia-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg text-purple-900">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-purple-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white/95 rounded-[30px] w-full max-w-4xl h-auto max-h-[90vh] relative shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-purple-300 hover:text-purple-900 z-10 transition-colors">
              <X size={24} />
            </button>

            <div className={`md:w-1/3 p-8 bg-gradient-to-br ${selectedProject.color} text-white flex flex-col justify-center`}>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-white/80 font-medium tracking-wide uppercase text-xs">Project Overview</p>
            </div>

            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center space-y-6 overflow-y-auto">
              <div>
                <h4 className="text-purple-600 font-bold text-sm mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span> Problem Statement
                </h4>
                <p className="text-base text-slate-700 leading-snug">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-fuchsia-500 font-bold text-sm mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> Tech Stack
                </h4>
                <p className="text-base text-slate-700 font-mono bg-slate-50 p-2 rounded-lg border border-slate-100 italic">
                  {selectedProject.techStack}
                </p>
              </div>

              <div>
                <h4 className="text-purple-600 font-bold text-sm mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span> What I Did
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-purple-100 pl-3">
                  {selectedProject.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a href={selectedProject.github} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-purple-700 transition-all text-sm shadow-md">
                  <Github size={16} /> Source Code
                </a>
                {selectedProject.id === 1 && (
                  <a href={selectedProject.demo} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-xl font-bold hover:shadow-lg transition-all text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-8 border-t border-gray-100 text-center bg-white">
        <p className="text-slate-500 font-medium text-xs">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;