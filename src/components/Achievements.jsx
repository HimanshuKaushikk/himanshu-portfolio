import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Innoviz Annual Project Competition",
      description: "Actively participated and showcased technical projects in the Innoviz Annual Project Competition, demonstrating problem-solving and innovation."
    },
    {
      title: "AICTE & IBM SkillsBuild Programs",
      description: "Successfully completed multiple advanced programs through AICTE and IBM SkillsBuild, enhancing expertise in modern web development and AI technologies."
    },
    {
      title: "Samsung Innovation Campus",
      description: "Successfully completed the rigorous Coding & Programming course at Samsung Innovation Campus, gaining hands-on expertise in problem-solving and modern programming paradigms."
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-gradient">Achievements</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="absolute -right-6 -top-6 text-white/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 pointer-events-none">
                <Trophy size={120} />
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
