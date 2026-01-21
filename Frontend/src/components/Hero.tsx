import { motion } from "framer-motion"
import Particles from "./ui/particles"
import Typewriter from 'typewriter-effect';
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { ShimmerButton } from "./magicui/shimmer-button"

export default function Hero() {

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Krushna-Shivshankar-Sakhare-Resume.pdf"; 
    link.download = "Krushna-Sakhare-Resume.pdf"; 
    link.click();
  }
  
  return (
    <>
      <section className="lg:container lg:mx-auto mx-3 relative z-10 md:mx-7 pt-8 md:pt-16 pb-0 flex flex-col md:items-start md:flex-row overflow-visible border-b-[3px] border-white/20">

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
          <h1 className="text-center sm:text-left text-4xl md:text-5xl mt-5 sm:mt-8 lg:text-[87px] mb-5 md:mb-10 lg:mb-8 tracking-[8px] font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-purple-500">
            FULL STACK <span className="tracking-[10px]">DEVELOPER</span> 
          </h1>

          <div className="text-center sm:text-left text-xl lg:text-2xl text-white/80 md:mb-12 lg:mb-10 max-w-2xl">
            I am Krushna&nbsp;
            {/* For small devices only */}
            <span className="flex justify-center sm:hidden text-[#fd73b4]">
              a&nbsp;
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Part Time Freelancer', 'MERN Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            {/* For sm and above*/}
            <span className="hidden sm:inline-block">— a&nbsp;</span>
            <span className="hidden sm:inline-block text-[#fd73b4]">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Part Time Freelancer', 'MERN Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            <br className="hidden md:block" />
            <span>
              with a passion for creating beautiful & responsive websites.
            </span>
          </div>

          
          <div className="text-center sm:flex gap-5">
            <div className="mx-auto sm:mx-0 mt-5 sm:mt-0 relative inline-block rounded-full p-[3px] bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 animate-border">
              <a href="#projects">
                <button className="relative z-10 rounded-full bg-[#12122dee] text-white font-semibold px-5 py-2 lg:px-10 lg:py-4 hover:opacity-90 transition">
                  VIEW MY WORK
                </button>
              </a>
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 blur-md opacity-80 animate-border z-0" />
            </div>

            <ShimmerButton className="mx-auto sm:mx-0 mt-4 sm:mt-0 text-sm font-semibold sm:text-base" onClick={handleResumeDownload}>
              Download Resume
            </ShimmerButton>
          </div>

          <div className="mx-auto sm:mx-0 mt-5 sm:mt-0 flex flex-row items-center justify-center sm:justify-start md:mt-12 lg:mt-10 lg:mb-10">
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
          <div className="absolute left-12 md:left-10 lg:left-0 inset-0 flex flex-col justify-center items-center text-gray-400 sm:text-2xl font-mono opacity-20 space-y-4 tracking-[3px]">
            <p>console.log('Hello World');</p>
            <p>$ npm install frontend-tools</p>
            <p>&lt;html&gt; &lt;/html&gt;</p>
            <p>class="container"</p>
            <p>// Mobile First Design</p>
            <p>npm start</p>
          </div>

          {/* Main Image */}
          <div className="relative z-10">
            <div className="left-10 md:right-10 absolute inset-0 rounded-full blur-xl opacity-15 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
              <img
                src="/profile-2.png"
                alt="Krushna Sakhare - Full Stack Developer"
                className="relative h-96 mt-6 lg:mt-0 md:w-[320px] md:h-[500px] lg:w-[450px] lg:h-auto object-fill md:mr-12 lg:mr-24"
                loading="eager"
                fetchPriority="high"
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