import { motion } from "framer-motion"
import Particles from "./ui/particles"
import Typewriter from 'typewriter-effect';
import { AnimatedTooltip } from "./ui/animated-tooltip";

// import { Button } from "../components/ui/button"
// import { BackgroundBeams } from "./ui/background-beams"

export default function Hero() {
  
  return (
    <>
      <section className="relative z-10 container mx-auto py-8 md:py-16 flex flex-col md:items-start md:flex-row overflow-hidden">

        {/* Particles Background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={['#442965']}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Left Content */}
        <motion.div 
          className="md:w-1/2 md:mb-0 mx-5" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl mt-8 md:text-8xl mb-8 tracking-[8px] font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500">
            FULL STACK <span className="tracking-[10px]">DEVELOPER</span> 
          </h1>

          <p className="text-2xl text-white/80 mb-10 max-w-2xl">
            I am Krushna — a&nbsp;
            <span className="text-[#fd73b4] inline-block">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Part Time Freelancer', 'MERN Stack Developer',],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <br />
            with a passion for creating beautiful & responsive websites.
          </p>

          <div className="relative inline-block rounded-full p-[3px] bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 animate-border">
            <a href="#projects">
              <button className="relative z-10 rounded-full bg-[#12122dee] text-white font-semibold px-10 py-4 hover:opacity-90 transition">
                VIEW MY WORK
              </button>
            </a>
            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-80 animate-border z-0" />
          </div>

          <div className="flex flex-row items-center mt-10 mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </motion.div>

        {/* Right Content */}
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

          {/* Main Image */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="absolute inset-0 rounded-full blur-xl opacity-15 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
            <img
              src="/profile-2.png"
              alt="Frontend Developer"
              className="relative z-10 w-[410px] h-auto object-cover rounded-full mr-24"
            />
          </div>
        </motion.div>

      </section>
    </>

  )
}



const people = [
  {
    id: 1,
    name: "React",
    image: "React.webp",
  },
  {
    id: 2,
    name: "NodeJs",
    image: "nodejs.webp",
  },
  {
    id: 3,
    name: "ExpressJs",
    image: "express.png",
  },
  {
    id: 4,
    name: "MongoDB",
    image: "mongoDb.png",
  },
  {
    id: 5,
    name: "JavaScript",
    image: "js.png",
  },
  {
    id: 6,
    name: "TypeScript",
    image: "Typescript.png",
  },
];