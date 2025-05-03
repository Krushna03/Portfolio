import { useForm } from "react-hook-form";
import { Send, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

interface contactdata {
  name: string,
  email: string,
  message: string
}
const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<contactdata>();

  const onSubmit = async (data: contactdata) => {
    try {
      const res = await axios.post("/api/contact", data);

      if (res.status === 2000) {
        toast('Message sent successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        reset();
      } else {
        toast('Failed to send message.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast('Something went wrong, Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          type: "error"
        });
        reset()
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            Contact Me
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl">
            Let's connect and bring your ideas to life.
          </p>
        </motion.h2>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 sm:gap-14 items-center">

          {/* Left Side */}
          <div className="spacey-y-5 sm:space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl tracking-wider font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
                DO YOU HAVE A PROJECT TO DISCUSS?
              </h2>
              <h3 className="mt-6 sm:mt-8 text-2xl font-normal mb-2 flex gap-3 items-center">
                Get in Touch <MessageCircle color="#ffffff" />
              </h3>
              <p className="text-white/70 mb-4">
                Feel free to reach out if you want to collaborate, hire me, or just have a chat about ideas and projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="flex gap-4 mt-3">
                <a href="https://github.com/Krushna03" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/krushna-sakhare" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300 p-2">
                  <Linkedin />
                </a>
                <a href="https://x.com/sakhare_kr9294" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff2a8d]/80 transition-colors duration-300 p-2">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-5 mx-2 sm:mx-0">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                {...register("name", { required: true })}
                type="text"
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:ring-2 focus:ring-[#ff2a8d]/50"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:ring-2 focus:ring-[#ff2a8d]/50"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">Email is required</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                {...register("message", { required: true })}
                rows={5}
                className="w-full px-4 py-2 bg-[#111122] border border-[#222233] rounded-md focus:ring-2 focus:ring-[#ff2a8d]/50"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
            </div>

            <Button type="submit" className="bg-[#6307f6d4] hover:bg-[#6307f6d4]/50 text-white rounded-md px-6 py-2 h-auto transition-transform duration-300 hover:translate-y-[-2px] w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </form>
        </motion.div>
      </motion.div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </section>
  );
};

export default Contact;
