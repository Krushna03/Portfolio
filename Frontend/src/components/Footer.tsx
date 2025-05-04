import { Linkedin, Twitter } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-[#2e2e3f] mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/80 text-sm text-center">© {new Date().getFullYear()} Krushna Sakhare. <br className="block sm:hidden"/> krushnasakhare965@gmail.com </p>
        
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
    </footer>
  )
}
