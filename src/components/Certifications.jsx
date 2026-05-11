import React from 'react';
import { motion } from 'framer-motion';
import { Award, BrainCircuit, Code, TerminalSquare, Monitor, LayoutTemplate, Briefcase, Trophy } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "AI Strategy & Business Intelligence Internship",
      issuer: "IBM SkillsBuild & AICTE",
      date: "Mar 2026 - Apr 2026",
      type: "Internship",
      icon: <Briefcase size={24} />
    },
    {
      title: "Coding & Programming",
      issuer: "Samsung Innovation Campus",
      date: "Dec 2025 - Feb 2026",
      type: "Training",
      icon: <Code size={24} />
    },
    {
      title: "Front End Web Development Internship",
      issuer: "Edunet Foundation & AICTE",
      date: "Aug 2025 - Sep 2025",
      type: "Internship",
      icon: <Briefcase size={24} />
    },
    {
      title: "Agentic AI: Become an AI Agent Architect",
      issuer: "IBM SkillsBuild",
      date: "Jul 2025 - Aug 2025",
      type: "PBL Program",
      icon: <BrainCircuit size={24} />
    },
    {
      title: "Click, Code, Create: Front End Web Development",
      issuer: "IBM SkillsBuild",
      date: "Jul 2025 - Aug 2025",
      type: "PBL Program",
      icon: <LayoutTemplate size={24} />
    },
    {
      title: "30 Hours Web Development Program",
      issuer: "NS3EDU (at SAITM)",
      date: "Apr 2025",
      type: "Training",
      icon: <Monitor size={24} />
    },
    {
      title: "INNOVIZ Annual Project Competition (Robot Gesture Control)",
      issuer: "SAITM (IEEE Student Branch)",
      date: "Apr 2024",
      type: "Competition",
      icon: <Trophy size={24} />
    },
    {
      title: "50-Hours Vocational Training in Web Development",
      issuer: "Kreativan Technologies",
      date: "Apr 2024",
      type: "Vocational Training",
      icon: <Award size={24} />
    },
    {
      title: "Web Development Training",
      issuer: "Coding Blocks",
      date: "Dec 2023",
      type: "Training",
      icon: <Code size={24} />
    },
    {
      title: "Prompt Engineering Training",
      issuer: "Kreativan Technologies",
      date: "Completed",
      type: "Training",
      icon: <TerminalSquare size={24} />
    },
    {
      title: "Digital Fundas (Digital Transformation Foundation)",
      issuer: "Incedo",
      date: "Completed",
      type: "Foundation Course",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] text-white transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 pointer-events-none">
                {React.cloneElement(cert.icon, { size: 120 })}
              </div>
              
              <div className="flex items-center gap-4 mb-6 z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-primary shadow-inner">
                  {cert.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                  {cert.type}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors z-10">
                {cert.title}
              </h3>
              
              <div className="mt-auto pt-6 border-t border-white/10 z-10">
                <p className="text-gray-400 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
