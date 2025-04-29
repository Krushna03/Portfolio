import { motion } from "framer-motion"
// import { Button } from "../components/ui/button"
// import { BackgroundBeams } from "./ui/background-beams"

export default function Hero() {
  
  return (
    <>
      <section className="z-50 container mx-auto px-4 py-8 md:py-16 flex flex-col md:items-start md:flex-row">
        <motion.div 
          className="md:w-1/2 md:mb-0 mx-5" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl mt-10 md:text-8xl mb-10 tracking-[8px] font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500">
            FULL STACK <span className="tracking-[10px]">DEVELOPER</span> 
          </h1>

          <p className="text-2xl text-white/80 mb-12 max-w-xl">
            I am Krushna — a 
            <span className="text-[#fd73b4] ml-2 mr-2">
            Full Stack Developer</span> 
            with a passion for creating beautiful and responsive websites.
          </p>

          <div className="inline-block rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
            <button className="rounded-full bg-[#12122dee] text-white font-semibold px-10 py-4 hover:opacity-90 transition">
              VIEW MY WORK
            </button>
          </div>
        </motion.div>
      
        <motion.div 
          className="md:w-1/2 flex justify-center md:justify-end mr-4 relative" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl"></div>

          {/* Coding text overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-400 text-2xl font-mono opacity-20 space-y-4 tracking-[3px]">
            <p>console.log('Hello World');</p>
            <p>$ npm install frontend-tools</p>
            <p>&lt;html&gt; &lt;/html&gt;</p>
            <p>class="container"</p>
            <p>// Mobile First Design</p>
            <p>npm start</p>
          </div>

          {/* Main Content (like image or text) */}
          <div className="relative z-10 flex justify-center items-center h-full">
            <img src="/profile-2.png" alt="Frontend Developer" className="w-96 h-auto object-cover" />
          </div>
        </motion.div>

      </section>
      {/* <BackgroundBeams /> */}
    </>
  )
}
