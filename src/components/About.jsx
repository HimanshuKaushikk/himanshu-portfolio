import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Brain } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="text-primary mb-4" size={32} />,
      title: "Frontend Development",
      description: "Skilled in HTML, CSS, JavaScript, TypeScript, and modern frameworks."
    },
    {
      icon: <Cpu className="text-accent mb-4" size={32} />,
      title: "Mobile App Development",
      description: "Experienced with React Native and Expo for cross-platform apps."
    },
    {
      icon: <Brain className="text-blue-400 mb-4" size={32} />,
      title: "AI & Modern Tech",
      description: "Interested in AI tools, prompt engineering, and continuous learning."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am a dedicated <strong className="text-white font-semibold">Computer Science Engineering student</strong> at St. Andrews Institute of Technology and Management, expected to graduate in 2027.
            </p>
            <p>
              My journey in tech is driven by a passion for creating impactful digital solutions. I specialize in frontend web and mobile application development, always striving to build responsive, user-friendly, and visually stunning interfaces.
            </p>
            <p>
              Beyond traditional development, I have a strong interest in <strong className="text-white font-semibold">AI tools, modern technologies, and cybersecurity basics</strong>. I possess a strong problem-solving mindset and a constant desire to learn and adapt in this ever-evolving field.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                {card.icon}
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
