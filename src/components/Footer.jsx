import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-darker py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold tracking-tighter text-gradient">
          HS.
        </div>
        
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Himanshu Sharma
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/HimanshuKaushikk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-sharma-a98b22294" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="mailto:sharma.himanshu8886@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/10 transition-all">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
