import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
// import SpotlightCard from "./ui/SpotlightCard"

const Services = () => {
  return (
    <section id='services' className="container mx-auto px-4 py-16 md:py-24">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        
        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            MY SERVICES
          </button>
          <p className="mt-3 font-light text-xl">
          Offering end-to-end web solutions — from design and development to <br /> optimization and documentation.
          </p>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#111122] p-6 rounded-lg border border-[#222233] hover:border-[#ff2a8d]/30 transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold mb-3">Fullstack Web Development</h3>
            <p className="text-white/70">Building powerful and scalable web applications using the MERN stack and Next.js.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold mb-3">Fullstack Web Development</h3>
            <p className="text-white/70">Building powerful and scalable web applications using the MERN stack and Next.js.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold mb-3">Fullstack Web Development</h3>
            <p className="text-white/70">Building powerful and scalable web applications using the MERN stack and Next.js.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold mb-3">Fullstack Web Development</h3>
            <p className="text-white/70">Building powerful and scalable web applications using the MERN stack and Next.js.</p>
          </SpotlightCard>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Services



const services = [
  { 
    title: "Fullstack Web Development", 
    description: "Building powerful and scalable web applications using the MERN stack and Next.js."
  },
  { 
    title: "Frontend Development", 
    description: "Creating responsive and modern user interfaces with React.js and Next.js."
  },
  { 
    title: "Backend API Development", 
    description: "Designing and developing secure RESTful APIs using Node.js and Express.js."
  },
  { 
    title: "Website Design and Redesign", 
    description: "Designing beautiful, user-friendly websites with a focus on performance and SEO."
  },
  { 
    title: "Bug Fixing and Code Optimization", 
    description: "Fixing bugs, improving code quality, and optimizing website performance."
  },
  { 
    title: "Technical Content Writing", 
    description: "Writing technical blogs, tutorials, and documentation focused on web development topics."
  }
];
