import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (Computer Science Engineering)",
      institution: "St. Andrews Institute of Technology and Management",
      year: "Expected Graduation: 2027",
      score: null
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "MLP International School",
      year: null,
      score: "72%"
    },
    {
      degree: "High School (Class X)",
      institution: "MLP International School",
      year: null,
      score: "71.2%"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-gradient">Education</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-darker group-hover:bg-primary/20 text-primary group-hover:text-primary transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                <GraduationCap size={20} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl hover:border-white/20 transition-colors">
                <h3 className="font-bold text-white text-xl mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <div className="flex items-center text-sm text-gray-400 gap-2">
                  {edu.year && (
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {edu.year}
                    </span>
                  )}
                  {edu.score && (
                    <span className="inline-block px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-300 font-mono">
                      Score: {edu.score}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
