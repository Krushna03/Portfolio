import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../lib/animations";
import {
  Card,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs"


const AboutMe = () => {
  return (
    <div id='about' className="py-10 overflow-x-hidden">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">

        <motion.h2 variants={itemVariants} className="text-center">
          <button className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            About Me
          </button>
          <p className="mt-3 text-xl text-white/80">
            Know more about me.
          </p>
        </motion.h2>

        <motion.div variants={itemVariants} className="w-full flex gap-10">
          
          {/* Left Side: Contact Info */}
          <div className="w-1/3">
          <div className="relative ml-8">
            <div className="absolute inset-0 rounded-full blur-xl opacity-15 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
              <img
                src="/profile-2.png"
                alt="Frontend Developer"
                className="relative z-10 w-[350px] h-auto object-cover rounded-full ml-10"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="space-y-6">
            <Tabs defaultValue="experience" className="w-[800px]">
              
              <TabsList className="grid w-full grid-cols-2 bg-[#2a3742] h-11">
                <TabsTrigger className="text-lg font-bold"  value="experience">Experience</TabsTrigger>
                <TabsTrigger className="text-lg font-bold" value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="experience">
                <Card className="bg-[#292b2e] border-none shadow-xl text-white">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-100">
                      Full Stack Developer | TDS Avenue Codeforge <br />
                      <span className="text-sm font-normal text-gray-300">(Nov 2024 - Jan 2025)</span>
                    </CardTitle>

                    <div className="mt-4 space-y-2">
                      <div>
                        <h2 className="font-semibold">1. VidyaNexus Web App</h2>
                        <p className="text-sm text-gray-300">
                          • Developed 90% of the frontend and 100% of the backend for a School Management System with distinct panels for Superadmin, Admin, Teacher, and Student.
                        </p>
                      </div>

                      <div className="pt-2">
                        <h2 className="font-semibold">2. FreshPicked</h2>
                        <p className="text-sm text-gray-300">
                          • Built the entire backend (100%) in Node.js for a vegetable delivery mobile application.
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-100">
                      Software Intern | TechWalnut Innovation LLP <br />
                      <span className="text-sm font-normal text-gray-300">(Jan 2025 -  Present)</span>
                    </CardTitle>

                    <div className="mt-4 space-y-2">
                      <div>
                        <h2 className="font-semibold">1. Hospital Management System</h2>
                        <p className="text-sm text-gray-300">
                          • Developed & handled 60% frontend part of a Hospital Management System.
                        </p>
                      </div>

                      <div className="pt-2">
                        <h2 className="font-semibold">2. Human Resource Management System</h2>
                        <p className="text-sm text-gray-300">
                          • Developed a full-fledged frontend..
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </TabsContent>

              
              <TabsContent value="education">
                <Card className="bg-[#292b2e] border-none shadow-xl text-white">
                  <CardHeader className="space-y-">
                    <h1 className="text-lg font-bold">Engineering</h1>
                    <CardTitle className="text-gray-200">Government College Of Engineering, Nagpur (2022 to 2025)</CardTitle>
                    <CardTitle className="text-gray-200">Electronics & Telecomunication</CardTitle>
                    <CardTitle className="text-gray-200">CGPA: 7.11</CardTitle>
                  </CardHeader>
                  <CardHeader className="space-y-3">
                    <h1 className="text-lg font-bold -mt-2">Diploma</h1>
                    <CardTitle className="text-gray-200">Government Polytechnic Nagpur (2019 to 2022)</CardTitle>
                    <CardTitle className="text-gray-200">Diploma Civil Engineering</CardTitle>
                    <CardTitle className="text-gray-200">Percentage: 92.35%</CardTitle>
                  </CardHeader>
                  <CardHeader className="space-y-3">
                    <h1 className="text-lg font-bold -mt-2">School</h1>
                    <CardTitle className="text-gray-200">Railway Men's High School, Nagpur (2022 to 2025)</CardTitle>
                    <CardTitle className="text-gray-200">10th</CardTitle>
                    <CardTitle className="text-gray-200">Percentage: 84%</CardTitle>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

        </motion.div>

      </motion.div>
    </div>
  )
}

export default AboutMe