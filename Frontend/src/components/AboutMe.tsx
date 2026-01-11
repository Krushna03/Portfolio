import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import SpotlightCard from "./ui/SpotlightCard";

const AboutMe = () => {
  return (
    <section id='about' className="mx-4 sm:mx-6 lg:container lg:mx-auto md:mx-8 py-16 md:py-24 overflow-x-hidden">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">

        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            ABOUT ME
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl text-white/80">
            Get to know me better
          </p>
        </motion.h2>

        <motion.div variants={itemVariants} className="w-full flex flex-col lg:flex-row items-center lg:items-start">
          
          {/* Profile Image Section - Updated Styling */}
          <div className="hidden sm:block w-full lg:w-1/3 flex justify-center ml-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
              <div className="relative">
                <img
                  src="/about-me.png"
                  alt="Krushna Sakhare - Full Stack Developer"
                  className="w-full max-w-[410px] rounded-2xl object-cover border-2 border-white/20 shadow-2xl cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 space-y-4">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="space-y-4 cursor-pointer">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Hi, I'm Krushna Sakhare
                </h3>
                <div className="space-y-3 text-base text-white/80 leading-relaxed w-full">
                  <p className="w-full">
                    I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> and <span className="text-purple-400 font-semibold">Part-Time Freelancer</span> with expertise in the MERN stack. I love creating beautiful, responsive, and scalable web applications that solve real-world problems.
                  </p>
                  <p className="w-full">
                    My journey in web development started with a curiosity to build things that matter. I specialize in developing end-to-end solutions, from designing intuitive user interfaces to building robust backend systems. I'm always eager to learn new technologies and take on challenging projects.
                  </p>
                  <p className="w-full">
                    When I'm not coding, I enjoy contributing to open-source projects, writing technical content, and helping fellow developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Stats/Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpotlightCard className="custom-spotlight-card text-center cursor-pointer" spotlightColor="rgba(255, 20, 147, 0.2)">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    2+
                  </div>
                  <p className="text-sm sm:text-base text-white/70 font-medium">
                    Years of Experience
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="custom-spotlight-card text-center cursor-pointer" spotlightColor="rgba(138, 43, 226, 0.2)">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                    10+
                  </div>
                  <p className="text-sm sm:text-base text-white/70 font-medium">
                    Projects Completed
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="custom-spotlight-card text-center cursor-pointer" spotlightColor="rgba(0, 191, 255, 0.2)">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                    MERN
                  </div>
                  <p className="text-sm sm:text-base text-white/70 font-medium">
                    Stack Expertise
                  </p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="custom-spotlight-card text-center cursor-pointer" spotlightColor="rgba(255, 20, 147, 0.2)">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                    100%
                  </div>
                  <p className="text-sm sm:text-base text-white/70 font-medium">
                    Client Satisfaction
                  </p>
                </div>
              </SpotlightCard>
            </div>

            {/* Key Highlights */}
            {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-white/80">
                      Full Stack Web Development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-white/80">
                      Frontend & Backend API Development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-white/80">
                      Responsive UI/UX Design
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-white/80">
                      Code Optimization & Bug Fixing
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard> */}
          </div>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default AboutMe
