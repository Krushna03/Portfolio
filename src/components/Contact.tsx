import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { ArrowRightIcon, Linkedin, MessageCircle, Send, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        
        {/* Main Heading */}
        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            Contact Me
          </button>
          <p className="mt-3 text-xl text-white/80">
          Let's connect and bring your ideas to life.
          </p>
        </motion.h2>


        {/* Main Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl tracking-wider font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">DO YOU HAVE A PROJECT TO DISCUSS ? </h2>
              <h3 className="mt-8 text-2xl font-normal mb-2 flex gap-3 items-center">Get in Touch <MessageCircle color="#ffffff" /> </h3>
              <p className="text-white/70 mb-4">Feel free to reach out if you want to collaborate, hire me, or just have a chat about ideas and projects. I'm available for freelance work or full-time opportunities.</p>
              {/* <ArrowRightIcon className="w-5 h-5 text-[#ff2a8d]" /> */}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="flex gap-4 mt-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300 p-2">
                  <Linkedin />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300 p-2">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="space-y-6 mt-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff2a8d]/50 focus:border-transparent"
              ></textarea>
            </div>
            <Button className="bg-[#6307f6d4] hover:bg-[#6307f6d4]/50 text-white rounded-md px-6 py-2 h-auto transition-transform duration-300 hover:translate-y-[-2px] w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
