import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Wrench, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      icon: <MonitorSmartphone className="text-primary mb-2" size={28} />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React Native", "Responsive Design", "UI/UX Basics"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-accent mb-2" size={28} />,
      skills: ["Git & GitHub", "VS Code", "Vercel", "Expo CLI", "React Navigation"]
    },
    {
      title: "Cybersecurity & AI",
      icon: <ShieldCheck className="text-blue-400 mb-2" size={28} />,
      skills: ["AI Fundamentals", "Prompt Engineering", "Threat Detection Basics"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="p-3 bg-darker rounded-2xl shadow-inner border border-white/5">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="px-4 py-2 bg-darker/80 border border-white/5 rounded-xl text-gray-300 text-sm font-medium hover:border-primary/50 hover:text-white transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
