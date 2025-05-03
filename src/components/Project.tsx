import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/animations"
const Projects = () => {

  return (
    <section id="projects" className="mx-6 lg:container lg:mx-auto md:mx-8 py-16 md:py-16">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">

        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            PROJECTS
          </button>
          <p className="mt-3 font-light text-lg sm:text-xl">
            See all my projects:
          </p>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 relative">
        {/* <div className="absolute inset-1 rounded-full blur-xl opacity-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div> */}
        {
          projects.map((item) => (
            <a href={item.link} target="_blank" className="p-3 rounded-xl shadow-2xl bg-[#16161bdc]">
              <motion.div key={item.name} variants={itemVariants} className="bg-[#16161bdc] rounded-lg overflow-hidden group hover:translate-y-[-5px] transition-all duration-300 cursor-pointer">
                <div className="relative h-">
                  <img src={item.img} alt={`Project ${item.name}`} className="object-fill" />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 mt-2">{item.name}</h3>
                  <h3 className="font-normal text-gray-100 mb-2">{item.description}</h3>
                  <div className="flex gap-2 text-xs">
                    <span className="py-2 text-gray-100  rounded">{item.TechUsed}</span>
                  </div>
                </div>
              </motion.div>
            </a>
        ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects



const projects = [
  {
    img: "/ColdMailer.Ai.png",
    name: "ColdMailer.Ai",
    link: "https://coldmailer-ai.vercel.app/",
    description: "An Ai based cold email generator",
    TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB"
  },
  {
    img: "/Hirrd.png",
    name: "Hirrd",
    link: "https://hirrd-1.vercel.app/",
    description: "An hiring platfrom for job seeker and recruiter",
    TechUsed: "React, Nodejs, Express, MongoDB"
  },
  {
    img: "/Kloset.png",
    name: "Kloset",
    link: "https://kloset-app.vercel.app/",
    description: "An E-commerce platform for the seamless shopping experience",
    TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB"
  },
  // {
  //   img: "/ColdMailer.Ai.png",
  //   name: "ColdMailer.Ai",
  //   link: "",
  //   description: "An Ai based cold email generator",
  //   TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB"
  // },
  // {
  //   img: "/Hirrd.png",
  //   name: "Hirrd",
  //   link: "",
  //   description: "An hiring platfrom foir job seeker and recruiter",
  //   TechUsed: "React, Nodejs, Express, MongoDB"
  // },
  // {
  //   img: "/Kloset.png",
  //   name: "Kloset",
  //   link: "",
  //   description: "An E-commerce platform for the seamless shopping experience",
  //   TechUsed: "Gemini Api, React, Nodejs, Express, MongoDB"
  // },
]