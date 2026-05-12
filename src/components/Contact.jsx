import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "89b05faa-2d13-401f-ab2a-e77671c900eb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        setStatus("success");
        event.target.reset();
      } else {
        setResult(data.message);
        setStatus("error");
      }
    } catch (error) {
      setResult("Something went wrong!");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:sharma.himanshu8886@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="text-gray-300 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors break-all">sharma.himanshu8886@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918094932958" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="text-gray-300 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">+91 8094932958</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Anti-Spam Honeypot Field */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 pl-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="How can I help you?" 
                  className="w-full bg-darker/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={result === "Sending..."}
                className="w-full py-4 bg-primary hover:bg-blue-600 disabled:bg-primary/50 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
                {result !== "Sending..." && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {result && result !== "Sending..." && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <p className="font-medium text-sm">{result}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
